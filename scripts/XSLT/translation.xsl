<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:tei="http://www.tei-c.org/ns/1.0"
  xmlns:hei= "https://digi.ub.uni-heidelberg.de/schema/tei/heiEDITIONS"
  exclude-result-prefixes="xs tei hei"
  version="2.0">
  
  <xsl:output encoding="UTF-8" indent="no" omit-xml-declaration="yes"/>
  
  
  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>
  
  <xsl:template match="tei:TEI">
    <div xmlns="http://www.tei-c.org/ns/1.0">
      <xsl:apply-templates select="node()"/>
    </div>
  </xsl:template>
  
  <xsl:template match="tei:teiHeader"></xsl:template>
  
  <xsl:template match="tei:body">
    <xsl:apply-templates select="node()"/>
  </xsl:template>
  
  <xsl:template match="tei:text">
    <xsl:apply-templates select="node()"/>
  </xsl:template>
  
  <xsl:template match="tei:lg">
    <span xmlns="http://www.tei-c.org/ns/1.0" class="tei-lg">
      <span class="lg-n">
        <xsl:value-of select="./@n"/>
      </span>
    <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:l">
    <span xmlns="http://www.tei-c.org/ns/1.0" class="tei-l">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  
  
</xsl:stylesheet>