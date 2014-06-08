$(window).load(function () {
    var A = {
        "1": "itangiriro",
        "2": "kuva",
        "3": "abalewi",
        "4": "kubara",
        "5": "gutegeka_kwa_kabiri",
        "6": "yosuwa",
        "7": "abacamanza",
        "8": "rusi",
        "9": "1_samweli",
        "10": "2_samweli",
        "11": "1_abami",
        "12": "2_abami",
        "13": "1_ibyo_ku_ngoma",
        "14": "2_ibyo_ku_ngoma",
        "15": "ezira",
        "16": "nehemiya",
        "17": "esiteri",
        "18": "yobu",
        "19": "zaburi",
        "20": "imigani",
        "21": "umubwiriza",
        "22": "indirimbo",
        "23": "yesaya",
        "24": "yeremiya",
        "25": "amaganya",
        "26": "ezekiyeli",
        "27": "daniyeli",
        "28": "hoseya",
        "29": "yoweli",
        "30": "amosi",
        "31": "obadiya",
        "32": "yona",
        "33": "mika",
        "34": "nahumu",
        "35": "habakuki",
        "36": "zefaniya",
        "37": "hagayi",
        "38": "zekariya",
        "39": "malaki",
        "40": "matayo",
        "41": "mariko",
        "42": "luka",
        "43": "yohana",
        "44": "ibyakozwe_n_intumwa",
        "45": "abaroma",
        "46": "1_abakorinto",
        "47": "2_abakorinto",
        "48": "abagalatiya",
        "49": "abefeso",
        "50": "abafilipi",
        "51": "abakolosayi",
        "52": "1_abatesalonike",
        "53": "2_abatesalonike",
        "54": "1_timoteyo",
        "55": "2_timoteyo",
        "56": "tito",
        "57": "filemoni",
        "58": "abaheburayo",
        "59": "yakobo",
        "60": "1_petero",
        "61": "2_petero",
        "62": "1_yohana",
        "63": "2_yohana",
        "64": "3_yohana",
        "65": "yuda",
        "66": "ibyahishuwe"
    };
    var B = {
        "1": "ibyahishuwe-22--itangiriro-50",
        "2": "itangiriro-50--kuva-40",
        "3": "kuva-40--abalewi-27",
        "4": "abalewi-27--kubara-36",
        "5": "kubara-36--gutegeka_kwa_kabiri-34",
        "6": "gutegeka_kwa_kabiri-34--yosuwa-24",
        "7": "yosuwa-24--abacamanza-21",
        "8": "abacamanza-21--rusi-4",
        "9": "rusi-4--1_samweli-31",
        "10": "1_samweli-31--2_samweli-24",
        "11": "2_samweli-24--1_abami-22",
        "12": "1_abami-22--2_abami-25",
        "13": "2_abami-25--1_ibyo_ku_ngoma-29",
        "14": "1_ibyo_ku_ngoma-29--2_ibyo_ku_ngoma-36",
        "15": "2_ibyo_ku_ngoma-36--ezira-10",
        "16": "ezira-10--nehemiya-13",
        "17": "nehemiya-13--esiteri-10",
        "18": "esiteri-10--yobu-42",
        "19": "yobu-42--zaburi-150",
        "20": "zaburi-150--imigani-31",
        "21": "imigani-31--umubwiriza-12",
        "22": "umubwiriza-12--indirimbo-8",
        "23": "indirimbo-8--yesaya-66",
        "24": "yesaya-66--yeremiya-52",
        "25": "yeremiya-52--amaganya-5",
        "26": "amaganya-5--ezekiyeli-48",
        "27": "ezekiyeli-48--daniyeli-12",
        "28": "daniyeli-12--hoseya-14",
        "29": "hoseya-14--yoweli-4",
        "30": "yoweli-4--amosi-9",
        "31": "amosi-9--obadiya-1",
        "32": "obadiya-1--yona-4",
        "33": "yona-4--mika-7",
        "34": "mika-7--nahumu-3",
        "35": "nahumu-3--habakuki-3",
        "36": "habakuki-3--zefaniya-3",
        "37": "zefaniya-3--hagayi-2",
        "38": "hagayi-2--zekariya-14",
        "39": "zekariya-14--malaki-3",
        "40": "malaki-3--matayo-28",
        "41": "matayo-28--mariko-16",
        "42": "mariko-16--luka-24",
        "43": "luka-24--yohana-21",
        "44": "yohana-21--ibyakozwe_n_intumwa-28",
		"45": "ibyakozwe_n_intumwa-28--abaroma-16",
        "46": "abaroma-16--1_abakorinto-16",
        "47": "1_abakorinto-16--2_abakorinto-13",
        "48": "2_abakorinto-13--abagalatiya-6",
        "49": "abagalatiya-6--abefeso-6",
        "50": "abefeso-6--abafilipi-4",
        "51": "abafilipi-4--abakolosayi-4",
        "52": "abakolosayi-4--1_abatesalonike-5",
        "53": "1_abatesalonike-5--2_abatesalonike-3",
        "54": "2_abatesalonike-3--1_timoteyo-6",
        "55": "1_timoteyo-6--2_timoteyo-4",
        "56": "2_timoteyo-4--tito-3",
        "57": "tito-3--filemoni-1",
        "58": "filemoni-1--abaheburayo-13",
        "59": "abaheburayo-13--yakobo-5",
        "60": "yakobo-5--1_petero-5",
        "61": "1_petero-5--2_petero-3",
        "62": "2_petero-3--1_yohana-5",
        "63": "1_yohana-5--2_yohana-1",
        "64": "2_yohana-1--3_yohana-1",
        "65": "3_yohana-1--yuda-1",
        "66": "yuda-1--ibyahishuwe-22"
    };
    var C = '<table><tr><td><div class="btn-group-vertical" data-toggle-name="booksList" id="booksList" data-toggle="buttons-radio">';
    var D = '<table><tr><td><div class="btn-group-vertical" data-toggle-name="radius_options" data-toggle="buttons-radio">';
    var E = '<li data-icon="false" style="background-color:#111;"><a href="#" data-rel="close">Hitamo Igitabo</a></li>';
    var F = 1;
    $.each(A, function (a, b) {
        var c = b.replace("_", " ");
        c = c.replace("_", " ");
        c = c.replace("_", " ");
        if (c === 'gutegeka kwa kabiri') {
            c = 'Gutegeka 2'
        }
        if (c === '1 ibyo ku ngoma') {
            c = '1 Ingoma'
        }
        if (c === '2 ibyo ku ngoma') {
            c = '2 Ingoma'
        }
        if (c === '2 abatesalonike') {
            c = '2 Tesalonike'
        }
        if (c === '1 abatesalonike') {
            c = '1 Tesalonike'
        }
        if (b === 'ibyakozwe_n_intumwa') {
            c = 'Ibyakozwe'
        }
        C += '<a href="#' + b + '" type="button" value="' + b + '" data-toggle="button" style="text-transform:capitalize">' + c + '</a>';
        if (F % 22 === 0) {
            C += '</div></td><td><div class="btn-group-vertical" data-toggle-name="booksList" id="booksList" data-toggle="buttons-radio">'
        }
        D += '<button type="button" value="' + a + '-' + b + '" data-toggle="button" class="btn btn-default"  style="text-transform:capitalize;background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #ededed), color-stop(1, #dfdfdf) );background:-moz-linear-gradient( center top, #ededed 5%, #dfdfdf 100% );filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ededed\', endColorstr=\'#dfdfdf\');background-color:#ededed;width:100%;padding:5px 0">' + c + '</button>';
        if (F % 66 === 0) {
            D += '</div></td><td><div class="btn-group-vertical" data-toggle-name="radius_options" data-toggle="buttons-radio">'
        }
        F++;
        E += '<li data-filtertext="wai-aria voiceover accessibility screen reader">';
        E += '	<a href="#" style="text-transform:capitalize" class="ver" id="' + b + '-1-1">' + c + '</a>';
        E += '</li>'
    });
    C += '</div></td></tr></table>';
    D += '</div></td></tr></table>';
    $('#booksList').html(C);
    $('#goto').html(D);
    jQuery(function ($) {
        $('div.btn-group-vertical[data-toggle-name]').each(function () {
            var l = $(this);
            var m = l.parents('form').eq(0);
            var n = l.attr('data-toggle-name');
            var o = $('input[name="' + n + '"]', m);
            $('button', l).each(function () {
                var k = $(this);
                k.live('click', function () {
                    o.val($(this).val());
                    var g = $(this).val().split('-');
                    var h = g[1];
                    var j = g[0];
                    jQuery.getJSON("bb.json", function (d) {
                        jQuery.each(d, function (a, b) {
                            if (b.toLowerCase().indexOf(h) >= 0) {
                                var c = b.split('-');
                                bb = c[0];
                                tc = c[1];
                                cc = c[2];
                                vv = c[3];
                                return false
                            }
                        });
                        var e = '<div class="btn-group-vertical" data-toggle-name="chapters" data-toggle="buttons-radio">';
                        for (var i = 1; i <= tc; i++) {
                            e += '<input type="button" value="' + i + '"';
                            e += 'data-toggle="button" id="' + h + '-' + i + '" data-max="' + tc + '" class="btn btn-default ch" style="text-transform:capitalize;background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #ededed), color-stop(1, #dfdfdf) );background:-moz-linear-gradient( center top, #ededed 5%, #dfdfdf 100% );filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ededed\', endColorstr=\'#dfdfdf\');background-color:#ededed;width:100%;padding:5px 0">'
                        }
                        e += '</div>';
                        $("#two").html(e);
                        var f = h.replace('_', ' ');
                        f = f.replace('_', ' ');
                        f = f.replace('_', ' ');
                        f = f.replace('-', ':');
                        $("#jya").html("Reba: <b>'" + f + "'</b>")
                    })
                });
                if (k.val() == o.val()) {
                    k.addClass('active')
                }
            })
        })
    });
    $(".ch,.btn7").live('click', function () {
        $("#nav-panel").panel("close");
        $("#add-form").panel("close");
        $("#two").empty();
        $("#three").empty();
        var w = this.id;
		
       	if (w.toLowerCase().indexOf("gutegeka_kwa_kabiri") >= 0) {
			t = w.replace('gutegeka_kwa_kabiri', 'Gutegeka');
		}
		
		else if (w.toLowerCase().indexOf("1_ibyo_ku_ngoma") >= 0) {
            t = w.replace('1_ibyo_ku_ngoma','1 Ingoma');
        }
        
        else if (w.toLowerCase().indexOf("2_abatesalonike") >= 0) {
            t = w.replace('2_abatesalonike','2 Tesalonik');
        }
		else if (w.toLowerCase().indexOf("1_abatesalonike") >= 0) {
            t = w.replace('1_abatesalonike','1 Tesalonik');
        }
        else if (w.toLowerCase().indexOf("ibyakozwe_n_intumwa") >= 0) {
            t = w.replace('ibyakozwe_n_intumwa','Ibyakozwe');
        }
		else t = w;
		
		var x = t.replace('-', ' : ');
		x = x.replace('_', ' ');
        x = x.replace('_', ' ');
        x = x.replace('_', ' ');
		$('#title').html(x);
        $('#bible-contents').empty();
        $('#bible-contents').html('<div id="mydiv"><img src="css/images/ajax-loaderi.gif" style="position: absolute;left: 50%;top: 50%;margin-left: -32px; /* -1 * image width / 2 */ margin-top: -32px;  /* -1 * image height / 2 */display: block; "/></div>');
        var y = '<table>';
        var h = w.split('-');
        var z = '';
		
        jQuery.getJSON("bb/" + h[0] + ".json", function (r) {
            jQuery.each(r, function (a, b) {
				
                var c = a.split(':');
                var d = c[0];
                var e = c[1];
                var t = d + "-" + e;
                var f = d + "-" + e;
                if (t === w) {
                    y += b
                }
            });
            var s = parseInt(h[1]);
            var v = h[0];
            $.each(B, function (a, b) {
                var c = b.split("--");
                var d = '';
                var e = '';
                var f = c[0];
                var g = f.split("-");
                var h = g[0];
                var j = parseInt(g[1]);
				
				
				
                if (h === v) {
					if (v === 'obadiya' || 
						v === 'filemoni' || 
						v === '2_yohana' || 
						v === '3_yohana' || 
						v === 'yuda' ) {
                        var o = c[1];
                        var p = o.split("-");
                        var q = p[0];
                        var n = s - 1;
                        e = q + "-1";
						var u = a - 1;
						var k = B[u].split('--');
                        d = k[0];
                    } else if (s === 1) {
						
						if ( v == 'ibyahishuwe' ) { var u = 66; }
                        else { var u = a - 1; }
                        var k = B[u].split('--');
                        var l = k[0];
                        var m = s + 1;
                        d = l;
                        e = v + '-' + m;
                    } else if (s > 1 && s < j) {
                        var n = s - 1;
                        var m = s + 1;
                        d = v + '-' + n;
                        e = v + '-' + m;
                    } else if (s === j) {
                        var o = c[1];
                        var p = o.split("-");
                        var q = p[0];
                        var n = s - 1;
                        d = v + '-' + n;
                        e = q + "-1";
                    }
					
                    z += '<br><hr><button data-type="button" id="' + d + '" class="ver btn7" title="' + d + '">Subira inyuma</button>';
                    z += '&nbsp;&nbsp;&nbsp;&nbsp;<button data-type="button" id="' + e + '" class="ver btn7" title="' + e + '">Komeza</button><hr><div class="b-links">';
                    for (var i = 1; i <= j; i++) {
                        z += '<span id="' + v + '-' + i + '" class="ch';
                        if (i == s) {
                            z += ' active'
                        }
                        z += '">' + i + '</span>'
                    }
                    z += "</div>"
                }
            });
            y += "</table>" + z;
            $('#bible-contents').empty();
			
            $('#bible-contents').html(y)
        })
    })
});