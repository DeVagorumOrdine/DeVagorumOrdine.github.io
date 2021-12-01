from lxml import etree as et 
import codecs 
import os 
import re 
import json 

# Create the XML file
stanzas = et.Element('stanzas')
newDOM = et.ElementTree(stanzas)
ns = {'tei':'http://www.tei-c.org/ns/1.0'}

for file in sorted(os.listdir('TEI')):
    if '_' not in file:
        dom = et.parse('TEI/'+file)
        root = dom.getroot()
        sigle = file[:-4]
        wss = et.SubElement(stanzas, 'witness', {'id': sigle})
        lgs = root.findall('.//tei:lg', ns)
        for lg in lgs:
            lg_el = et.SubElement(wss, 'lg', {'n':lg.attrib['n'], 'corresp': lg.attrib['corresp']})
            
        

# with codecs.open('TEI/_strophenSynopse.xml', 'w', 'utf-8') as outfile:

newDOM.write('TEI/_strophenSynopse.xml', pretty_print=True, encoding="UTF-8", xml_declaration=True)


# Create the HTML

wss = newDOM.findall('.//witness')
htmlDOM =et.parse('dev/strophen_synopse_template.html')
root = htmlDOM.getroot()

div = root.find('.//div[@id="main"]')

for i in range(0, max([len(x) + 1 for x in wss])):
    print(i)
    if i == 0:
        row = et.SubElement(div, 'div', {'class': 'row'})
        for wit in wss:
            el = et.SubElement(row, 'div', {'class': 'col-md-8r witness-head'})
            el2 = et.SubElement(el, 'h2', {'class': 'text-center'})
            el2.text = wit.attrib['id']
    else:
        row = et.SubElement(div, 'div', {'class': 'row'})
        for wit in wss:
            if i <= len(wit) :
                el = et.SubElement(row, 'div', {'class': 'col-md-8r'})
                el1 = et.SubElement(el, 'div', {'class': 'full'})
                witness_el = et.SubElement(el1, 'span', {'class':'witness'})
                witness_el.text = wit.attrib['id']
                el2 = et.SubElement(el1, 'h4', {'class': 'text-center'})
                el2.text =  wit[i-1].attrib['corresp']
                el3 = et.SubElement(el1, 'span', {'class': 'inner-n'})
                el3.text = wit[i-1].attrib['n']
            else:
                el = et.SubElement(row, 'div', {'class': 'col-md-8r empty'})
                el.text = " "
        


for elem in root.iter():
    if elem.text == None:
        elem.text = ''
htmlDOM.write('dev/strophen_synopse.html', pretty_print= True, encoding="UTF-8", xml_declaration=False)


#  Create JSON for the corresponding stanzas

lgs = stanzas.findall('.//lg', ns)
all_str_ids = set()
corresp_json = {}
for lg in lgs:
    all_str_ids.add(lg.attrib['corresp'])
    
for str_id in all_str_ids:
    corresp_json[str_id] = {}
    for lg in stanzas.findall('.//lg[@corresp="'+ str_id +'"]', ns):
        corresp_json[str_id][lg.getparent().attrib['id']] = lg.attrib['n']

with codecs.open('dev/stanzas_corresp.json', 'w', 'utf-8') as outfile:
    json.dump(corresp_json, outfile)


