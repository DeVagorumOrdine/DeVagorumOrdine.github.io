<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:tei="http://www.tei-c.org/ns/1.0"
  xmlns:hei= "https://digi.ub.uni-heidelberg.de/schema/tei/heiEDITIONS"
  exclude-result-prefixes="xs"
  version="2.0">
  
  <xsl:output encoding="UTF-8" method="xml" indent="no" omit-xml-declaration="no"/>
  
  <xsl:param name="stanza">1</xsl:param>

  
  <xsl:template match="/">
    <text xmlns="http://www.tei-c.org/ns/1.0">
      <xsl:copy-of select="//tei:lg[@n=$stanza]"></xsl:copy-of>  
    </text>
    
    <!--<lg xmlns="http://www.tei-c.org/ns/1.0">
      <xsl:apply-templates select="@*|node()"/>
    </lg>-->
  </xsl:template>
  
  
  
 
  
</xsl:stylesheet>