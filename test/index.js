/*jshint multistr: true ,node: true, mocha: true*/
"use strict";


var
    assert              = require('assert'),
    gltv                = require('../index.js');


describe('All tests', function() {

    before(function(done) {
        done();
    });

    var sets = [
        ['', []],
        ['hello', []],

        ['<%=hello%>',['hello']],
        ['<%= hello %>',['hello']],
        ['<%= hello %><%=bye%>',['hello', 'bye']],
        ['<%=hello%><%=bye%><%=world%>',['hello', 'bye', 'world']],
        ['<%= hello %><%= bye %><%= world %>', ['hello', 'bye', 'world']],

        ['<%-hello%>',['hello']],
        ['<%- hello %>',['hello']],
        ['<%- hello %><%-bye%>',['hello', 'bye']],
        ['<%-hello%><%-bye%><%-world%>',['hello', 'bye', 'world']],
        ['<%- hello %><%- bye %><%- world %>', ['hello', 'bye', 'world']],

        ['<%if(name){%>',['name']],
        ['<% if ( name ) { %>', ['name']],

        // repeated
        ['<%=hello%><%=bye%><%-bye%><%=hello%>',['hello', 'bye']],
    ];


    it("Checking for sets ", function(done) {

        // firing logs
        for(var iset = 0; iset < sets.length; iset ++) {
            var output = gltv(sets[iset][0]);

            assert(JSON.stringify(sets[iset][1]) === JSON.stringify(output), "set failing : " + iset.toString());
        }
        done();
    });

});


