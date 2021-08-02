from lxml import etree as et 
import re 

def translation_xml_html(file, xsl):
    dom = et.parse('TEI/'+file)
    root = dom.getroot()
    sigle = file.split('_')[0]
    transform = et.XSLT(xsl)
    newdom = transform(dom)
    content = et.tostring(newdom, encoding=str)
    content = re.sub(r">[\n\s]*<", '><', content)
    content = re.sub(r'\s{2,}', '', content)
    content = re.sub(r'<\?xml-model.+/schematron"\?>', '', content)
    content = re.sub(r'xmlns="http://www\.tei-c\.org/ns/1\.0"', '', content)
    
    return (sigle, content)