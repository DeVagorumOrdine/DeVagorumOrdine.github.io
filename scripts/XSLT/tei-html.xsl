<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:tei="http://www.tei-c.org/ns/1.0"
  exclude-result-prefixes="xs tei"
  version="2.0">
  
  <xsl:output encoding="UTF-8" method="xml" indent="yes"/>
  
  <!-- For the lg and l converted before -->
  <xsl:template match="tei:span">
    <xsl:copy-of select="."/>
  </xsl:template>

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
    <span class='tei-c'><xsl:apply-templates select="node()"/></span>
  </xsl:template>

  <xsl:template match="tei:pc[@resp]">
    <span class='tei-reg'>
      <span class="tei-pc"><xsl:value-of select="."/></span>
    </span>
  </xsl:template>
  <xsl:template match="tei:pc[not(@resp)]">
    <span class='tei-orig'>
      <span class="tei-pc"><xsl:value-of select="."/></span>
    </span>
  </xsl:template>
  
  
  
  <xsl:template match="tei:br">
    <xsl:copy-of select="."/>
  </xsl:template>
  
  
  
  <xsl:template match="tei:lb">
    <span class="tei-lb">
      <br/>
      <span class="n">
        <span style="font-size:small">z. </span>
        <xsl:value-of select="./@n"/>
      </span>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:sic">
    <span class="tei-sic">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>

  <xsl:template match="tei:corr">
    <span class="tei-corr">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:orig">
    <span class="tei-orig">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>

  <xsl:template match="tei:reg">
    <span class="tei-reg">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:surplus">
    <span class="tei-surplus">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:am">
    <span class="tei-am">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:ex">
    <span class="tei-ex">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:abbr">
    <span class="tei-abbr">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:expan">
    <span class="tei-expan">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  
  <xsl:template match="tei:add">
    <span class="tei-add">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:del">
    <span class="tei-del">
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:hi">
    <span>
      <xsl:attribute name="class">
        <xsl:text>tei-hi</xsl:text>
        <xsl:for-each select="./@*">
          <xsl:text> </xsl:text>
          <xsl:value-of select="translate(., ':', '-')"/>
        </xsl:for-each>
        
      </xsl:attribute>
      <xsl:apply-templates select="node()"/>
    </span>
  </xsl:template>
  
  
<!-- Special Notes on Variants on Original Manuscript -->
  <xsl:template match="tei:choice[count(tei:seg) > 1][.//tei:note[contains(@ana,'hc:ExemplarNote')]]">
    <xsl:variable name="number_glosses" as="xs:integer">
      <xsl:value-of select="count(./preceding::tei:note[contains(@ana,'hc:ExemplarNote')])"/>
    </xsl:variable>
    <span class="gloss">
      <span>
        <xsl:attribute name="class">
          <xsl:text>gloss-target</xsl:text>
        </xsl:attribute>
        <xsl:attribute name="id">
          <xsl:text>gloss-target_</xsl:text>
          <xsl:value-of select="$number_glosses"/>
        </xsl:attribute>
        <xsl:apply-templates select="./tei:seg[1]"></xsl:apply-templates>
      </span>
      <span>
        <xsl:attribute name="class">
          <xsl:text>gloss-interlinear</xsl:text>
        </xsl:attribute>
        <xsl:attribute name="id">
          <xsl:text>gloss-interlineal_</xsl:text>
          <xsl:value-of select="$number_glosses"/>
        </xsl:attribute>
        <xsl:apply-templates select="./tei:seg[2]"></xsl:apply-templates>
      </span>
    </span>
  </xsl:template>
  
  <xsl:template match="tei:note[contains(@ana,'hc:InterlinearGloss')]">
    <xsl:apply-templates select="node()"/>
  </xsl:template>
  
  
</xsl:stylesheet>