from lxml import etree as et 
import codecs 
import re 
import os 
import json 

final_json = {"texts":{}}
ns = {'tei':'http://www.tei-c.org/ns/1.0'}

# Create the XSLT to isolate the page
page_extract = et.parse('scripts/XSLT/page_extract.xsl')
xsl_main = et.parse('scripts/XSLT/tei-html.xsl')

for file in os.listdir('TEI'):
    if '_transl' in file:
        continue
    else:
        print(file)

    dom = et.parse('TEI/'+file)

    root = dom.getroot()
    for page in root.findall('.//tei:pb', ns):
        page_number = page.attrib['n']
        # Do a transformation for each page that creates a DOM with that page just in here and then apply the transform to HTML
        transform = et.XSLT(page_extract)
        newdom = transform(dom, page=et.XSLT.strparam(page_number))
        # content = et.tostring(newdom, encoding=str)
        # print(content)

        transform = et.XSLT(xsl_main)
        newdom = transform(newdom)
        content = et.tostring(newdom, encoding=str)
    

        # content = content.replace('"', '\\"')
        content = re.sub(r'>[\n\s]*<', '><', content)

        # SPECIAL CHARS
        content = content.replace('ſ', '<span class="tei-orig">ſ</span><span class="tei-reg">s</span>')
        content = content.replace('ı', '<span class="tei-orig">ı</span><span class="tei-reg">i</span>')

        final_json['texts'][file[:-4] + '-' + page_number] = content




with codecs.open('viewer/html_fragments.json', 'w', 'utf-8') as outfile:
    json.dump(final_json, outfile)


