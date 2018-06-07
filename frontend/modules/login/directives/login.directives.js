hotel.directive('calendar', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attr, ngModel) {
              el.datepicker({
                dateFormat: 'dd/mm/yy',
                changeMonth:true,
                changeYear:true,
                yearRange:"1930:2000",
                maxDate:"0",
                onSelect: function (dateText) {
                    scope.$apply(function () {
                        ngModel.$setViewValue(dateText);
                    });
                }
            });
        }
    };
});

hotel.directive('dropzone', function () {
  return function (scope, element, attrs) {


    var config = scope[attrs.dropzone];

    // create a Dropzone for the element with the given options
    var dropzone = new Dropzone(element[0], config.options);

    // bind the given event handlers
    angular.forEach(config.eventHandlers, function (handler, event) {
      dropzone.on(event, handler);
    });
  };
});
