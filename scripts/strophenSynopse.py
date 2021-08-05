from lxml import etree as et 
import codecs 
import os 
import re 

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
htmlDOM =et.parse('viewer/strophen_synopse_template.html')
root = htmlDOM.getroot()

div = root.find('.//div[@id="main"]')

for i in range(0, max([len(x) for x in wss])):
    print(i)
    if i == 0:
        row = et.SubElement(div, 'div', {'class': 'row'})
        for wit in wss:
            el = et.SubElement(row, 'div', {'class': 'col-md-7r witness-head'})
            el2 = et.SubElement(el, 'h2', {'class': 'text-center'})
            el2.text = wit.attrib['id']
    else:
        row = et.SubElement(div, 'div', {'class': 'row'})
        for wit in wss:
            if i < len(wit):
                # print(i)
                
                el = et.SubElement(row, 'div', {'class': 'col-md-7r'})
                el1 = et.SubElement(el, 'div', {'class': 'full witness' + wit.attrib['id'] + 
                                    ' sid-'+ re.sub(',', '-', wit[i -1].attrib['corresp'])})
                el2 = et.SubElement(el1, 'h4', {'class': 'text-center'})
                el2.text =  wit[i-1].attrib['corresp']
                el3 = et.SubElement(el1, 'span', {'class': 'inner-n'})
                el3.text = wit[i-1].attrib['n']
            else:
                el = et.SubElement(row, 'div', {'class': 'col-md-7r empty'})
                el.text = " "
        


for elem in root.iter():
    if elem.text == None:
        elem.text = ''
htmlDOM.write('viewer/strophen_synopse.html', pretty_print= True, encoding="UTF-8", xml_declaration=False)