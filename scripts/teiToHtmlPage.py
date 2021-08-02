from lxml import etree as et 
import codecs 
import re 
import os 
import json 

from translation import translation_xml_html

final_json = {"texts":{}}
ns = {'tei':'http://www.tei-c.org/ns/1.0'}
translation_json = {"texts": {}}

# Create the XSLT to isolate the page
transform_stanzas = et.parse('scripts/XSLT/transform-stanzas.xsl')
remove_empty_elements = et.parse('scripts/XSLT/remove-empty-elements.xsl')
page_extract = et.parse('scripts/XSLT/page-extract.xsl')
xsl_main = et.parse('scripts/XSLT/tei-html.xsl')
translation_xslt = et.parse('scripts/XSLT/translation.xsl')

for file in os.listdir('TEI'):
    if '_transl' in file:
        tr_res = translation_xml_html(file, translation_xslt)
        translation_json["texts"][tr_res[0]] = tr_res[1]
    else:
        # print(file)
        dom = et.parse('TEI/'+file)
        root = dom.getroot()

        sigle = file[:-4]
        final_json['texts'][sigle] = {}

        # First we transform all the stanzas and verses into milestones
        transform = et.XSLT(remove_empty_elements)
        newdom = transform(dom)
        root = newdom.getroot()

        # Then we remove empty elements that are useless in the visualization
        transform = et.XSLT(transform_stanzas)
        newdom1 = transform(newdom)
        root = newdom1.getroot()

        for page in root.findall('.//tei:pb', ns):
            page_number = page.attrib['n']
            # Do a transformation for each page that creates a DOM with that page just in here and then apply the transform to HTML
            transform = et.XSLT(page_extract)
            newdom2 = transform(newdom1, page=et.XSLT.strparam(page_number))

            transform = et.XSLT(xsl_main)
            newdom3 = transform(newdom2)
            content = et.tostring(newdom3, encoding=str)
            content = re.sub(r">[\n\s]*<", '><', content)

            # SPECIAL CHARS
            content = content.replace('ſ', '<span class="tei-orig">ſ</span><span class="tei-reg">s</span>')
            content = content.replace('ı', '<span class="tei-orig">ı</span><span class="tei-reg">i</span>')
            content = content.replace('ꝛ', '<span class="tei-orig">ꝛ</span><span class="tei-reg">r</span>')
            content = content.replace('Ꝺ', '<span class="tei-orig">Ꝺ</span><span class="tei-reg">D</span>')
            content = content.replace('ꝺ', '<span class="tei-orig">ꝺ</span><span class="tei-reg">d</span>')
            
            content = content.replace('<div class="tei-text">', '')
            content = re.sub(r'\s{2,}', '', content)
            content = content[0:-6]
            
            

            final_json['texts'][sigle][page_number] = content




with codecs.open('viewer/html_fragments.json', 'w', 'utf-8') as outfile:
    json.dump(final_json, outfile)

with codecs.open('viewer/translation.json', 'w', 'utf-8') as outfile2:
    json.dump(translation_json, outfile2)




