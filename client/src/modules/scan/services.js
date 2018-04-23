(function (Pistols) {

    Pistols.factory('ScanService', function ($state, $timeout, LocaleService, qrCodes) {

        var Text = LocaleService.Strings.scan;
        var onerror = Text.onerror;
        var instruction = Text.instruction;
        var qr = qrCodes.list;

        function onQRScanSuccess (success) {
            var index = checkQR(qr, success);
            if (checkQR(qr, success) !== -1) {
                var scanned = qr[index][success].split('_');
                $timeout(function () {
                    $state.go('objects.details', {category: scanned[0], item: scanned[1]});
                }, 100);
            }
            else {
                alert(onerror);
            }
        }

        function checkQR (array, val) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].hasOwnProperty(val)) {
                    return i;
                }
            }
            return -1;
        }

        function onQRScanFailure (error) {
            //alert(error);
        }

        return {
            scanCode: function () {
                var params = {
                    text_title: '', // 'OPTIONAL Title Text - default = 'Scan QR Code'', // Android only
                    text_instructions: instruction, // 'OPTIONAL Instruction Text - default = 'Please point your camera at the QR code.'', // Android only
                    camera: 'back', // 'front' || 'back' // defaults to 'back'
                    flash: 'off', // 'on' || 'off' || 'auto' // defaults to 'auto'. See Quirks
                    drawSight: false// true || false //defaults to true, create a red sight/line in the center of the scanner view.
                };

                cloudSky.zBar.scan(params, onQRScanSuccess, onQRScanFailure);
            }
        };

    });

    Pistols.factory('qrCodes', function () {

        return {
            list: [
                {'con01': 'convert_1'},
                {'con02': 'convert_2'},
                {'con03': 'convert_3'},
                {'con04': 'convert_4'},
                {'con05': 'convert_5'},
                {'mil20': 'militar_1'},
                {'mil21': 'militar_2'},
                {'mil22': 'militar_3'},
                {'mil23': 'militar_4'},
                {'mil24': 'militar_5'},
                {'mil25': 'militar_6'},
                {'mil26': 'militar_7'},
                {'mil27': 'militar_8'},
                {'mil28': 'militar_9'},
                {'mil29': 'militar_10'},
                {'per06': 'percuss_1'},
                {'per07': 'percuss_2'},
                {'per08': 'percuss_3'},
                {'per09': 'percuss_4'},
                {'per10': 'percuss_5'},
                {'per11': 'percuss_6'},
                {'per12': 'percuss_7'},
                {'per13': 'percuss_8'},
                {'per14': 'percuss_9'},
                {'per15': 'percuss_10'},
                {'per16': 'percuss_11'},
                {'per17': 'percuss_12'},
                {'per18': 'percuss_13'},
                {'per19': 'percuss_14'},
                {'rev30': 'revolv_1'},
                {'rev31': 'revolv_2'},
                {'rev32': 'revolv_3'},
                {'rev33': 'revolv_4'},
                {'rev34': 'revolv_5'},
                {'rev35': 'revolv_6'}]
        }

    });


})(angular.module('Pistols.scan'));
