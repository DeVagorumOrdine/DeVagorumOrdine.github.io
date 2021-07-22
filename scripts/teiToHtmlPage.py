from lxml import etree as et 
import codecs 
import re 
import os 
import json 

final_json = {"texts":{}}
ns = {'tei':'http://www.tei-c.org/ns/1.0'}

# Create the XSLT to isolate the page
transform_stanzas = et.parse('scripts/XSLT/transform-stanzas.xsl')
page_extract = et.parse('scripts/XSLT/page-extract.xsl')
xsl_main = et.parse('scripts/XSLT/tei-html.xsl')

for file in os.listdir('TEI'):
    if '_transl' in file:
        continue
    else:
        print(file)

    dom = et.parse('TEI/'+file)

    root = dom.getroot()

    # First we transform all the stanzas and verses into milestones
    transform = et.XSLT(transform_stanzas)
    newdom1 = transform(dom)
    root = newdom1.getroot()

    for page in root.findall('.//tei:pb', ns):
        page_number = page.attrib['n']
        # print(page_number)
        # Do a transformation for each page that creates a DOM with that page just in here and then apply the transform to HTML
        transform = et.XSLT(page_extract)
        newdom2 = transform(newdom1, page=et.XSLT.strparam(page_number))
        # content = et.tostring(newdom2, encoding=str)
        # print(content)

        transform = et.XSLT(xsl_main)
        newdom3 = transform(newdom2)
        content = et.tostring(newdom3, encoding=str)
    

        # content = content.replace('"', '\\"')
        content = re.sub(r'>[\n\s]*<', '><', content)

        # SPECIAL CHARS
        content = content.replace('ſ', '<span class="tei-orig">ſ</span><span class="tei-reg">s</span>')
        content = content.replace('ı', '<span class="tei-orig">ı</span><span class="tei-reg">i</span>')
        content = content.replace('ꝛ', '<span class="tei-orig">ꝛ</span><span class="tei-reg">r</span>')
        content = content.replace('Ꝺ', '<span class="tei-orig">Ꝺ</span><span class="tei-reg">D</span>')
        content = content.replace('ꝺ', '<span class="tei-orig">ꝺ</span><span class="tei-reg">d</span>')
        
        

        final_json['texts'][file[:-4] + '-' + page_number] = content




with codecs.open('viewer/html_fragments.json', 'w', 'utf-8') as outfile:
    json.dump(final_json, outfile)


