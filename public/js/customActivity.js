define([
    'postmonger'
], function (
    Postmonger
) {
    'use strict';

    var connection = new Postmonger.Session();
    var authTokens = {};
    var payload = {};
    var lastStepEnabled = false;
    var steps = [ 
       { "label": "Configure Postcard", "key": "step1" }
    ];
    var currentStep = steps[0].key;

    $(window).ready(onRender);

    connection.on('initActivity', initialize);
    connection.on('requestedTokens', onGetTokens);
    connection.on('requestedEndpoints', onGetEndpoints);

    connection.on('clickedNext', save);
   
    function onRender() {
        // JB will respond the first time 'ready' is called with 'initActivity'
        connection.trigger('ready');

        connection.trigger('requestTokens');
        connection.trigger('requestEndpoints');

    }

    function initialize(data) {
        console.log(data);
        if (data) {
            payload = data;
        }
        
        var hasInArguments = Boolean(
            payload['arguments'] &&
            payload['arguments'].execute &&
            payload['arguments'].execute.inArguments &&
            payload['arguments'].execute.inArguments.length > 0
        );

        var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};

        console.log(inArguments);

        $.each(inArguments, function (index, inArgument) {
            $.each(inArgument, function (key, val) {
                
                if (key === 'postcardURL')
                {
                    $('#postcard-url').val(val);
                    $('.postcard-preview-content').css('background-image',"url('"+$('#postcard-url').val()+"')");
                }

                if (key === 'postcardText')
                {
                    $('#postcard-text').val(val);
                    $('#postcard-preview-text').html($('#postcard-text').val());
                }
            });
        });

        connection.trigger('updateButton', {
            button: 'next',
            text: 'done',
            visible: true
        });
    }

    function onGetTokens(tokens) {
        // Response: tokens = { token: <legacy token>, fuel2token: <fuel api token> }
        console.log(tokens);
        authTokens = tokens;
    }

    function onGetEndpoints(endpoints) {
        // Response: endpoints = { restHost: <url> } i.e. "rest.s1.qa1.exacttarget.com"
        console.log(endpoints);
    }

    function save() {
        var postcardURLValue = $('#postcard-url').val();
        var postcardTextValue = $('#postcard-text').val();

        payload['arguments'].execute.inArguments = [{
            "postcardURL": postcardURLValue,
            "postcardText": postcardTextValue,
            "tokens": authTokens,
            "emailAddress": "{{Contact.Attribute.PostcardJourney.EmailAddress}}",
            "firstName": "{{Contact.Attribute.PostcardJourney.FirstName}}",
            "lastName": "{{Contact.Attribute.PostcardJourney.LastName}}",
            "address1": "{{Contact.Attribute.PostcardJourney.Address1}}",
            "address2": "{{Contact.Attribute.PostcardJourney.Address2}}",
            "city": "{{Contact.Attribute.PostcardJourney.City}}",
            "state": "{{Contact.Attribute.PostcardJourney.State}}",
            "zipcode": "{{Contact.Attribute.PostcardJourney.PostalCode}}",
            "country": "{{Contact.Attribute.PostcardJourney.Country}}"
        }];
        
        payload['metaData'].isConfigured = true;

        console.log(payload);
        connection.trigger('updateActivity', payload);
    }

    $('#btn-preview').click(function(){
        $('#postcard-preview-text').html($('#postcard-text').val());
        $('.postcard-preview-content').css('background-image',"url('"+$('#postcard-url').val()+"')");
    });

});