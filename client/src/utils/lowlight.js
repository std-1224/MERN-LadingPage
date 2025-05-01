// src/config/lowlight.js
import { lowlight } from 'lowlight';
// import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import php from 'highlight.js/lib/languages/php';
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
// lowlight.registerLanguage("javascript", javascript);
lowlight.registerLanguage("ts", ts);
lowlight.registerLanguage('python', python);
lowlight.registerLanguage('php', php);

export default lowlight;
