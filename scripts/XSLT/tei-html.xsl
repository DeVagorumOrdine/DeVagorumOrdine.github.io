<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:tei="http://www.tei-c.org/ns/1.0"
  exclude-result-prefixes="xs tei"
  version="2.0">
  
  <xsl:output encoding="UTF-8" method="html" indent="yes"/>
  

  <xsl:template match="tei:text">
    <div class="tei-text"><xsl:apply-templates select="node()"/></div>
  </xsl:template>
  
  <xsl:template match="tei:w">
    <span class='tei-w'>
      <xsl:apply-templates select="node()"/>
      <span class='tei-att-lemma'>
        <xsl:value-of select="./@lemma"/>
      </span>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:c">
    <span class='tei-c'>
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:lg">
    <span class="tei-lg">
      <br/>
      <span class="n"><xsl:value-of select="./@n"/></span>
    </span>
  </xsl:template>
  <xsl:template match="tei:l">
    <span class="tei-l">
      <br/>
      <span class="n"><xsl:value-of select="./@n"/></span>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:lb">
    <span class="tei-lb">
      <br/>
      <span class="n"><xsl:value-of select="./@n"/></span>
    </span>
  </xsl:template>
  
  
  
  
  <!--
  
  <xsl:template match="tei:lg">
    <span class='tei-lg'/>
<!-\-    <xsl:apply-templates select="node()"/>-\->
  </xsl:template>
  
  <xsl:template match="tei:expan | tei:ex | tei:reg | tei:corr | tei:pc "/>
  
  <xsl:template match="tei:l">
    <span class='tei-l'/>
      <!-\-<xsl:apply-templates select="tei:w | tei:c | tei:pc | tei:metamark 
        | tei:sic | tei:add | tei:choice | tei:orig "/>  -\->
  </xsl:template>

  <xsl:template match="tei:sic">
    <xsl:apply-templates select="node()"/>
  </xsl:template>
  
  <xsl:template match="tei:add">
    <xsl:text>❬</xsl:text>
    <xsl:apply-templates select="node()"/>
    <xsl:text>❭</xsl:text>
  </xsl:template>
  
  <xsl:template match="tei:choice">
    <xsl:apply-templates select=" *"></xsl:apply-templates>
  </xsl:template>
  
  <xsl:template match="tei:w">
    <span class='tei-w'>
      <xsl:apply-templates select="node()"/>
      <span class='tei-att-lemma'>
        <xsl:value-of select="./@lemma"/>
      </span>
    </span>
  </xsl:template>
  
  <xsl:template match="cb">
    
  </xsl:template>
  
  
  -->
  
</xsl:stylesheet>