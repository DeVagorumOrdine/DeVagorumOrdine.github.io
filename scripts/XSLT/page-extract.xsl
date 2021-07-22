<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:tei="http://www.tei-c.org/ns/1.0"
  xmlns:hei= "https://digi.ub.uni-heidelberg.de/schema/tei/heiEDITIONS"
  exclude-result-prefixes="xs"
  version="2.0">
  
  <xsl:output encoding="UTF-8" method="xml" indent="no" omit-xml-declaration="no"/>
  
  <xsl:param name="page">95v</xsl:param>

  
  <xsl:variable name="excluded" select="//node()[preceding::tei:pb[1]/@n = $page]
    [not(ancestor::*[1]/preceding::tei:pb[1]/@n = $page)]"/>
  

  
  
  <xsl:template match="/">
    <TEI xmlns="http://www.tei-c.org/ns/1.0">
      <xsl:copy-of select="//tei:teiHeader"/>
      <text>
      <body>
      <xsl:for-each select="$excluded">
        <xsl:copy-of select="."/>
        <!--<xsl:choose>
          <xsl:when test="self::tei:lg">
            <lg>
              <xsl:attribute name="n">
                <xsl:value-of select="./@n"/>  
              </xsl:attribute>
            </lg>
          </xsl:when>
          <xsl:when test="self::tei:head">
            <xsl:copy-of select="."/>
          </xsl:when>
          <xsl:when test="self::tei:l">
            <l>
              <xsl:attribute name="n">
                <xsl:value-of select="./@n"/>
              </xsl:attribute>
            </l>
            <xsl:copy-of select="./node()"/>
          </xsl:when>
          <xsl:otherwise></xsl:otherwise>
        </xsl:choose>-->
      </xsl:for-each>
      </body>
    </text>
    </TEI>
  </xsl:template>
  
  
  
 
  
</xsl:stylesheet>