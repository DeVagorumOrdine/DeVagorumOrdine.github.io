from lxml import etree as et 
import codecs 
import re 
import os 
import json 

from translation import translation_xml_html
from annotationen import addNotes


def specialChars(content):
    content = re.sub(r">[\n\s]*<", '><', content)
    # SPECIAL CHARS
    content = content.replace('ſ', '<span class="tei-orig">ſ</span><span class="tei-reg">s</span>')
    content = content.replace('ı', '<span class="tei-orig">ı</span><span class="tei-reg">i</span>')
    content = content.replace('ꝛ', '<span class="tei-orig">ꝛ</span><span class="tei-reg">r</span>')
    content = content.replace('Ꝺ', '<span class="tei-orig">Ꝺ</span><span class="tei-reg">D</span>')
    content = content.replace('ꝺ', '<span class="tei-orig">ꝺ</span><span class="tei-reg">d</span>')
    return content

# PAGES

final_json = {"texts":{}}
ns = {'tei':'http://www.tei-c.org/ns/1.0'}
translation_json = {"texts": {}}
stanzas_json = {"stanzas": {}}

# Create the XSLT to isolate the page
transform_stanzas = et.parse('scripts/XSLT/transform-stanzas.xsl')
remove_empty_elements = et.parse('scripts/XSLT/remove-empty-elements.xsl')
page_extract = et.parse('scripts/XSLT/page-extract.xsl')
xsl_main = et.parse('scripts/XSLT/tei-html.xsl')

isolate_stanzas = et.parse('scripts/XSLT/stanza-extract.xsl')

translation_xslt = et.parse('scripts/XSLT/translation.xsl')

for file in os.listdir('TEI'):
    if '_transl' in file:
        tr_res = translation_xml_html(file, translation_xslt)
        translation_json["texts"][tr_res[0]] = tr_res[1]
    elif '_annotations' in file:
        continue
    else:
        # print(file)
        dom = et.parse('TEI/'+file)
        root_orig = dom.getroot()

        sigle = file[:-4]

        

        # PAGES JSON
        final_json['texts'][sigle] = {}

        # We remove empty elements that are useless in the visualization
        transform = et.XSLT(remove_empty_elements)
        newdom_no_empty = transform(dom)

        # We add the comments
        newdom_comments = addNotes(sigle, newdom_no_empty)
        

        # First we transform all the stanzas and verses into milestones
        xslt_stanzas = et.XSLT(transform_stanzas)
        newdom1 = xslt_stanzas(newdom_comments)
        root = newdom1.getroot()

        

        for page in root.findall('.//tei:pb', ns):
            page_number = page.attrib['n']
            # Do a transformation for each page that creates a DOM with that page just in here and then apply the transform to HTML
            transform = et.XSLT(page_extract)
            newdom2 = transform(newdom1, page=et.XSLT.strparam(page_number))

            transform = et.XSLT(xsl_main)
            newdom3 = transform(newdom2)
            content = et.tostring(newdom3, encoding=str)


            content = specialChars(content)
            
            content = content.replace('<div class="tei-text">', '')
            content = re.sub(r'\s{2,}', ' ', content)
            content = content[0:-6]
            
            

            final_json['texts'][sigle][page_number] = content


        # STANZAS JSON 
        stanzas_json['stanzas'][sigle] = {}
        for stanza in root_orig.findall('.//tei:lg', ns):
            stz_nr = stanza.attrib['n']
            transform = et.XSLT(isolate_stanzas)
            temp_dom = transform(newdom_no_empty, stanza=et.XSLT.strparam(stz_nr))
            temp_dom1 = xslt_stanzas(temp_dom)
            transform = et.XSLT(xsl_main)
            temp_dom2 = transform(temp_dom1)
            content = et.tostring(temp_dom2, encoding=str)
            content = specialChars(content)
            content = re.sub(r'\s{2,}', '', content)
            content = re.sub(r'<br/>\s*<br/>', '', content)
            stanzas_json['stanzas'][sigle][stz_nr] = content




with codecs.open('viewer/html_fragments.json', 'w', 'utf-8') as outfile:
    json.dump(final_json, outfile)

with codecs.open('viewer/translation.json', 'w', 'utf-8') as outfile2:
    json.dump(translation_json, outfile2)

with codecs.open('viewer/stanzas.json', 'w', 'utf-8') as outfile3:
    json.dump(stanzas_json, outfile3)


