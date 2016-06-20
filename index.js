/*jshint multistr: true ,node: true*/
"use strict";

/**
 * Return a list of variables in a lodash template
 *
 * @param {String} template - template to examine for variables
 * @throws {TypeError} - if template is not a string
 * @return {String[]} - list of variable identifiers
 */
module.exports = function(template){
    if (typeof template !== 'string') {
        throw new TypeError('Expected template to be a string');
    }

    var pattern = [
        '<%[=|-]?', // look for opening tag (<%, <%=, or <%-)
        '(?:[\\s]|if|\\()*', // accept any space after opening tag and before identifier
        '(.+?)', // capture the identifier name (`hello` in <%= hello %>)
        '(?:[\\s]|\\)|\\{)*', // accept any space after identifier and before closing tag
        '%>' // look for closing tag
    ].join('');
    /* eslint-enable no-inline-comments */

    var
        regex   = new RegExp(pattern, 'g'),
        matches = [],
        match   = null;

    while (match = regex.exec(template)) {
        // array uniqueness
        if(matches.indexOf(match[1]) <= -1) matches.push(match[1]);
    }

    return matches;
};
