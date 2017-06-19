var source = $('#hello-world-template').html();
var template = Handlebars.compile(source);

var helloStatement = { helloTitle: "Hello world", helloContent: "GA JS class is just awesome"};

            var compiledTemplate = template(helloStatement);
            $('body').append(compiledTemplate);