<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:tei="http://www.tei-c.org/ns/1.0"
  exclude-result-prefixes="xs tei"
  version="2.0">
  
<!--  THIS TEMPLATE IS USEFUL TO DELETE THE EMPTY ELEMENTS THAT CAUSE PROBLEMS WHEN TRANSFORMED TO HTML, AS THEY MIX WITH OTHERS-->
  
  
  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>
  
  <xsl:template match="tei:reg[not(string())]"></xsl:template>
  <xsl:template match="tei:corr[not(string())]"></xsl:template>
  <xsl:template match="tei:sic[not(string())]"></xsl:template>
  <xsl:template match="tei:orig[not(string())]"></xsl:template>
  <xsl:template match="tei:note[not(string())]"></xsl:template>
  
  
</xsl:stylesheet>