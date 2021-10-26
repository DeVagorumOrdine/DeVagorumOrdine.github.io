from lxml import etree as et 
import re 

def addNotes(sigle, dom):
    # balanced_par = "[^\(]*(\(.*\))[^\)]*"
    # balanced_par ='\(.+\)[\s|"]'
    balanced_par = '(?:\S+[\s]?)+'
    ns = {'tei':'http://www.tei-c.org/ns/1.0'}
    root = dom.getroot()
    annotationen = et.parse('TEI/dvo_annotations.xml')
    root_anno = annotationen.getroot()

    for annot in root_anno.iter('note'):
        targets = re.findall('\w+#xpath' + balanced_par, annot.attrib['target'])
        for target in targets:
            wit = target.split('#')[0]
            if wit == sigle:
                print(target)
                xpath = target.split('xpath')[1][1:-1]
                if xpath[-1] == ')':
                    xpath = xpath[:-1]
                xpath = xpath.replace('/lg', '/tei:lg')
                xpath = xpath.replace('/l', '/tei:l')
                xpath = xpath.replace('/w', '/tei:w')
                target_element = root.xpath('.' + xpath, namespaces=ns)
                if len(target_element) > 0:
                    
                    target_element = target_element[0]
                    parent_element = target_element.getparent()
                    index = parent_element.index(target_element)
                    # del annot.attrib['target']
                    annot.tag = '{http://www.tei-c.org/ns/1.0}note'
                    annot.attrib['target'] = '#' + annot.attrib['target'].split('#')[1]
                    parent_element.insert(index + 1, annot )

    # print(root.xpath('.//tei:note', namespaces=ns))

    resultDom = et.ElementTree(root)
    return resultDom









    # annotationen = et.parse('TEI/dvo_annotations.xml')
    # root_anno = annotationen.getroot()
    # ns = {'tei':'http://www.tei-c.org/ns/1.0'}

    # # teis = {x[:-4]: et.parse('TEI/' + x).getroot() for x in sorted(os.listdir('TEI')) if '_' not in x}
    # for annot in root_anno.iter('note'):
    #     targets = re.findall('\w+#xpath\S+', annot.attrib['target'])
    #     for target in targets:
    #         wit = target.split('#')[0]
    #         xpath = target.split('xpath')[1][1:-1]
    #         xpath = xpath.replace('/lg', '/tei:lg')
    #         xpath = xpath.replace('/l', '/tei:l')
    #         xpath = xpath.replace('/w', '/tei:w')
    #         # print(xpath)
    #         target_element = teis[wit].xpath('.' + xpath, namespaces=ns)[0]
    #         parent_element = target_element.getparent()
    #         index = parent_element.index(target_element)
    #         # del annot.attrib['target']
    #         annot.attrib['target'] = '#' + annot.attrib['target'].split('#')[1]
    #         parent_element.insert(index + 1, annot )

    # for sigle in teis:
    #     newdom = et.ElementTree(teis[sigle])
    #     newdom.write('TEI/'+ sigle +'.xml', pretty_print=False, encoding="UTF-8", xml_declaration=True)


