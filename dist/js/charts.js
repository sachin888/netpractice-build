var selector1 = '#container1';
var chart = c3.generate({
    data: {
        json: [{
            date: '2014-01-01',
            Claims: 200
        }, {
            date: '2014-02-02',
            Claims: 100
        }, {
            date: '2014-03-03',
            Claims: 300
        }, {
            date: '2014-04-04',
            Claims: 400
        },
            {
                date: '2014-05-03',
                Claims: 300
            }, {
                date: '2014-06-04',
                Claims: 400
            },
            {
                date: '2014-07-04',
                Claims: 800
            },
            {
                date: '2014-08-03',
                Claims: 600
            }, {
                date: '2014-09-04',
                Claims: 500
            }],
        types: {
            Claims: 'area-spline'
        },
        keys: {
            x: 'date',
            value: ['Claims']
        }
    },
    bindTo: selector1,
    axis: {
        x: {
            type: 'timeseries',
            tick: {
				format: function(x) {
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
					console.log("Container1: " + month[x.getMonth()]);
					return (month[x.getMonth()]);
				},
				fit: false
			}
			/*tick: {
                format: function (x) {
                    locale = "en-us"
                    return x.toLocaleString(locale, { month: "short" })
                }
            }*/
        }
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    }
});
$(selector1).data('c3-chart', chart);
$("#container1").append(chart.element);



var selector2 = '#container2';
var chart = c3.generate({
    data: {
        json: [{
            date: '2014-01-01',
            RejectedClaims: 200
        }, {
            date: '2014-02-02',
            RejectedClaims: 100
        }, {
            date: '2014-03-03',
            RejectedClaims: 300
        }, {
            date: '2014-04-04',
            RejectedClaims: 400
        },
            {
                date: '2014-05-03',
                RejectedClaims: 300
            }, {
                date: '2014-06-04',
                RejectedClaims: 400
            },
            {
                date: '2014-07-04',
                RejectedClaims: 800
            },
            {
                date: '2014-08-03',
                RejectedClaims: 600
            }, {
                date: '2014-09-04',
                RejectedClaims: 500
            }],
        types: {
            RejectedClaims: 'area-spline'
        },
        keys: {
            x: 'date',
            value: ['RejectedClaims','Approved Claims','Claims in Process']
        },

    },
    bindTo: selector2,
    axis: {
        x: {
            type: 'timeseries',
            tick: {
				format: function(x) {
					var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
					console.log("Container2: " + month[x.getMonth()]);
					return (month[x.getMonth()]);
				},
				fit: false
			}
			/*tick: {
                format: function (x) {
                    locale = "en-us"
                    return x.toLocaleString(locale, { month: "short" })
                }
            }*/
        }
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    }
});
$(selector2).data('c3-chart', chart);

$("#container2").append(chart.element);

$(".btnGraph1").on('click', function() {
    var chart =  $("#container1").data('c3-chart');
    chart.transform('bar', 'Claims');
    $("#container1").append(chart.element);
});
$(".btnMenu1").on('click', function() {
    var chart =  $("#container1").data('c3-chart');
    chart.transform('area-spline', 'Claims');
    $("#container1").append(chart.element);
});
$(".btnGraph2").on('click', function() {
    var chart =  $("#container2").data('c3-chart');
    chart.transform('bar', 'RejectedClaims');
    $("#container2").append(chart.element);
});
$(".btnMenu2").on('click', function() {
    var chart =  $("#container2").data('c3-chart');
    chart.transform('area-spline', 'RejectedClaims');
    $("#container2").append(chart.element);
});