<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:tei="http://www.tei-c.org/ns/1.0"
  xmlns:hei= "https://digi.ub.uni-heidelberg.de/schema/tei/heiEDITIONS"
  exclude-result-prefixes="xs tei"
  version="2.0">
  
  <xsl:output encoding="UTF-8" method="xml" indent="no" omit-xml-declaration="no"/>
  
 
  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>
  
  
  <xsl:template match="tei:lg">
    <span xmlns="http://www.tei-c.org/ns/1.0" class="tei-lg">
      <br/>
      <br/>
      <span class="n">
        <xsl:value-of select="./@n"/>
      </span>
      <span class="corresp">
        <xsl:value-of select="./@corresp"/>
      </span>
    </span>
    <xsl:apply-templates select="node()"/>
  </xsl:template>
  <xsl:template match="tei:l">
    <span xmlns="http://www.tei-c.org/ns/1.0" class="tei-l">
      <br/>
      <span class="n">
        <span style="font-size: small"><xsl:text>v. </xsl:text></span>
        <xsl:value-of select="./@n"/>
      </span>
    </span>
    <xsl:apply-templates select="node()"/>
  </xsl:template>
  
 
  
</xsl:stylesheet>