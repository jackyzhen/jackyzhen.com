import React from 'react'
import faviconICO from './assets/favicon.ico'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (o, k, a, p, i) {
            o[p] = o[p] || function ()
            { (o[p].queue = o[p].queue || []).push(arguments); }; var e = k.createElement(i);
            var firstScript = k.getElementsByTagName(i)[0]; e.async = 1; e.src = a;
            firstScript.parentNode.insertBefore(e, firstScript);
          })(window, document,
          '//okapianalytics.com/zeug.js',
          'okapi', 'script');
          okapi('set', 'tokenId', 'b91490a5-0325-43f6-9d9a-c547ee69b4af');
          okapi('set', 'trackerApiUrl', '//okapianalytics.com/api/collect' );
          okapi('trackPageView');
            `}}
        />
</script>
<!-- End Okapi Analytics -->
<head>
  <link rel="shortcut icon" href={faviconICO} />
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {this.props.headComponents}
  {css}
</head>
<body {...this.props.bodyAttributes}>
  {this.props.preBodyComponents}
  <div
    key={`body`}
    id="___gatsby"
    dangerouslySetInnerHTML={{ __html: this.props.body }}
  />
  {this.props.postBodyComponents}
</body>
      </html>
    )
  }
}
