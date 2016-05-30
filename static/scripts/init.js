Reveal.initialize({
    history: true,
    dependencies: [
        // Syntax highlight for <code> elements
        { src: 'static/lib/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    ]
})