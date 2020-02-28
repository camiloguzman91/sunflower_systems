function calc(operation) {
    var n1 = document.getElementById("numrm_01").value;
    var n2 = document.getElementById("numrm_02").value;
    var n3 = document.getElementById("numrm_03").value;
    var n4 = document.getElementById("numrm_04").value;
    var n5 = document.getElementById("numrm_05").value;
    var n6 = document.getElementById("numrm_06").value;
    var n7 = document.getElementById("numrm_07").value;
    var n8 = document.getElementById("numrm_08").value;
    var n9 = document.getElementById("numrm_09").value;
    var n10 = document.getElementById("numrm_10").value;
    var n11 = document.getElementById("numrm_11").value;
    var n12 = document.getElementById("numrm_12").value;
    var n13 = document.getElementById("numrmm_01").value;
    var n21 = document.getElementById("numrmm_02").value;
    var n31 = document.getElementById("numrmm_03").value;
    var n41 = document.getElementById("numrmm_04").value;
    var n51 = document.getElementById("numrmm_05").value;
    var n61 = document.getElementById("numrmm_06").value;
    var n71 = document.getElementById("numrmm_07").value;
    var n81 = document.getElementById("numrmm_08").value;
    var n91 = document.getElementById("numrmm_09").value;
    var n92 = document.getElementById("numrmm_10").value;
    var n93 = document.getElementById("numrmm_11").value;
    var n94 = document.getElementById("numrmm_12").value;
    var n95 = document.getElementById("result").value;
    var n96 = document.getElementById("result1").value;
    

    numrm_01 = Number(n1);
    numrm_02 = Number(n2);
    numrm_03 = Number(n3);
    numrm_04 = Number(n4);
    numrm_05 = Number(n5);
    numrm_06 = Number(n6);
    numrm_07 = Number(n7);
    numrm_08 = Number(n8);
    numrm_09 = Number(n9);
    numrm_10 = Number(n10);
    numrm_11 = Number(n11);
    numrm_12 = Number(n12);
    numrmm_01 = Number(n13);
    numrmm_02 = Number(n21);
    numrmm_03 = Number(n31);
    numrmm_04 = Number(n41);
    numrmm_05 = Number(n51);
    numrmm_06 = Number(n61);
    numrmm_07 = Number(n71);
    numrmm_08 = Number(n81);
    numrmm_09 = Number(n91);
    numrmm_10 = Number(n92);
    numrmm_11 = Number(n93);
    numrmm_12 = Number(n94);
    result = Number(n95);
    result1 = Number(n96);

    switch(operation) {
        case 1:
            result = ((numrm_01 + numrm_02 + numrm_03 + numrm_04 + numrm_05 + numrm_06 + numrm_07 + numrm_08 + numrm_09 + numrm_10 + numrm_11 + numrm_12) / 12);
            result1 = ((numrmm_01 + numrmm_02 + numrmm_03 + numrmm_04 + numrmm_05 + numrmm_06 + numrmm_07 + numrmm_08 + numrmm_09 + numrmm_10 + numrmm_11 + numrmm_12) / 12);
            result11 = ((numpgfv_01 + numpgfv_02 + numpgfv_03 + numpgfv_04 + numpgfv_05 + numpgfv_06 + numpgfv_07 + numpgfv_08 + numpgfv_09 + numpgfv_10 + numpgfv_11 + numpgfv_12) / 12);
            cmetot = (numrmm_01 + numrmm_02 + numrmm_03 + numrmm_04 + numrmm_05 + numrmm_06 + numrmm_07 + numrmm_08 + numrmm_09 + numrmm_10 + numrmm_11 + numrmm_12);
        break;
    } 

    var result = document.getElementById("result").value = result;
    var result1 = document.getElementById("result1").value = result1;
    var result11 = document.getElementById("result11").value = result11;
    var cmetot = document.getElementById("cmetot").value = cmetot;
}

function calc1(operation2) {
    var n100 = document.getElementById("numrm_01").value;
    var n101 = document.getElementById("numrmm_01").value;
    var n102 = document.getElementById("numrm_02").value;
    var n103 = document.getElementById("numrmm_02").value;
    var n104 = document.getElementById("numrm_03").value;
    var n105 = document.getElementById("numrmm_03").value;
    var n106 = document.getElementById("numrm_04").value;
    var n107 = document.getElementById("numrmm_04").value;
    var n108 = document.getElementById("numrm_05").value;
    var n109 = document.getElementById("numrmm_05").value;
    var n110 = document.getElementById("numrm_06").value;
    var n111 = document.getElementById("numrmm_06").value;
    var n112 = document.getElementById("numrm_07").value;
    var n113 = document.getElementById("numrmm_07").value;
    var n114 = document.getElementById("numrm_08").value;
    var n115 = document.getElementById("numrmm_08").value;
    var n116 = document.getElementById("numrm_09").value;
    var n117 = document.getElementById("numrmm_09").value;
    var n118 = document.getElementById("numrm_10").value;
    var n119 = document.getElementById("numrmm_10").value;
    var n120 = document.getElementById("numrm_11").value;
    var n121 = document.getElementById("numrmm_11").value;
    var n122 = document.getElementById("numrm_12").value;
    var n123 = document.getElementById("numrmm_12").value;

    numrm_01 = Number(n100);
    numrmm_01 = Number(n101);
    numrm_02 = Number(n102);
    numrmm_02 = Number(n103);
    numrm_03 = Number(n104);
    numrmm_03 = Number(n105);
    numrm_04 = Number(n106);
    numrmm_04 = Number(n107);  
    numrm_05 = Number(n108);
    numrmm_05 = Number(n109);
    numrm_06 = Number(n110);
    numrmm_06 = Number(n111);  
    numrm_07 = Number(n112);
    numrmm_07 = Number(n113);
    numrm_08 = Number(n114);
    numrmm_08 = Number(n115);  
    numrm_09 = Number(n116);
    numrmm_09 = Number(n117);
    numrm_10 = Number(n118);
    numrmm_10 = Number(n119);  
    numrm_11 = Number(n120);
    numrmm_11 = Number(n121);
    numrm_12 = Number(n122);
    numrmm_12 = Number(n123);  

    switch(operation2) {
        case 1:
            numpgfv_01 = (numrmm_01) / (numrm_01 * 31 * 0.85);
            numpgfv_02 = (numrmm_02) / (numrm_02 * 28 * 0.85);
            numpgfv_03 = (numrmm_03) / (numrm_03 * 31 * 0.85);
            numpgfv_04 = (numrmm_04) / (numrm_04 * 30 * 0.85);
            numpgfv_05 = (numrmm_05) / (numrm_05 * 31 * 0.85);
            numpgfv_06 = (numrmm_06) / (numrm_06 * 30 * 0.85);
            numpgfv_07 = (numrmm_07) / (numrm_07 * 31 * 0.85);
            numpgfv_08 = (numrmm_08) / (numrm_08 * 31 * 0.85);
            numpgfv_09 = (numrmm_09) / (numrm_09 * 30 * 0.85);
            numpgfv_10 = (numrmm_10) / (numrm_10 * 31 * 0.85);
            numpgfv_11 = (numrmm_11) / (numrm_11 * 30 * 0.85);
            numpgfv_12 = (numrmm_12) / (numrm_12 * 31 * 0.85);
        break;
    } 

    var numpgfv_01 = document.getElementById("numpgfv_01").value = numpgfv_01;
    var numpgfv_02 = document.getElementById("numpgfv_02").value = numpgfv_02;
    var numpgfv_03 = document.getElementById("numpgfv_03").value = numpgfv_03;
    var numpgfv_04 = document.getElementById("numpgfv_04").value = numpgfv_04;
    var numpgfv_05 = document.getElementById("numpgfv_05").value = numpgfv_05;
    var numpgfv_06 = document.getElementById("numpgfv_06").value = numpgfv_06;
    var numpgfv_07 = document.getElementById("numpgfv_07").value = numpgfv_07;
    var numpgfv_08 = document.getElementById("numpgfv_08").value = numpgfv_08;
    var numpgfv_09 = document.getElementById("numpgfv_09").value = numpgfv_09;
    var numpgfv_10 = document.getElementById("numpgfv_10").value = numpgfv_10;
    var numpgfv_11 = document.getElementById("numpgfv_11").value = numpgfv_11;
    var numpgfv_12 = document.getElementById("numpgfv_12").value = numpgfv_12;
}
function calc2(operation3) {
    var n1000 = document.getElementById("numpgfv_01").value;
    var n1001 = document.getElementById("numpgfv_02").value;
    var n1002 = document.getElementById("numpgfv_03").value;
    var n1003 = document.getElementById("numpgfv_04").value;
    var n1004 = document.getElementById("numpgfv_05").value;
    var n1005 = document.getElementById("numpgfv_06").value;
    var n1006 = document.getElementById("numpgfv_07").value;
    var n1007 = document.getElementById("numpgfv_08").value;
    var n1008 = document.getElementById("numpgfv_09").value;
    var n1009 = document.getElementById("numpgfv_10").value;
    var n1010 = document.getElementById("numpgfv_11").value;
    var n1011 = document.getElementById("numpgfv_12").value;   

    numpgfv_01 = Number(n1000);
    numpgfv_02 = Number(n1001);
    numpgfv_03 = Number(n1002);
    numpgfv_04 = Number(n1003);
    numpgfv_05 = Number(n1004);
    numpgfv_06 = Number(n1005);
    numpgfv_07 = Number(n1006);
    numpgfv_08 = Number(n1007);
    numpgfv_09 = Number(n1008);
    numpgfv_10 = Number(n1009);
    numpgfv_11 = Number(n1010);
    numpgfv_12 = Number(n1011);

    switch(operation3) {
        case 1:
            result11 = ((numpgfv_01 + numpgfv_02 + numpgfv_03 + numpgfv_04 + numpgfv_05 + numpgfv_06 + numpgfv_07 + numpgfv_08 + numpgfv_09 + numpgfv_10 + numpgfv_11 + numpgfv_12) / 12);
        break;
    }

    var result11 = document.getElementById("result11").value = result11;
    var result11 = document.getElementById("result11t").value = result11;

} 



function calc3(operation4) {
    var n1012 = document.getElementById("pnominv").value;
    var n1013 = document.getElementById("result11").value;

    pnominv = Number(n1012);
    result11 = Number(n1013);

    switch(operation4) {
        case 1:
            fdi = (pnominv / result11);
        break;
    }

    var fdi = document.getElementById("fdi").value = fdi;

}
function calc4(operation5) {
    var n1014 = document.getElementById("pmaxmod").value;
    var n1015 = document.getElementById("result11").value;

    pmaxmod = Number(n1014);
    result11 = Number(n1015);

    switch(operation5) {
        case 1:
            modu = ((result11 * 1000) / pmaxmod);
        break;
    }

    var modu = document.getElementById("modu").value = modu;

}
function calc5(operation6) {
    var n1016 = document.getElementById("cmetot").value;
    var n1017 = document.getElementById("result11").value;

    cmetot = Number(n1016);
    result11 = Number(n1017);

    switch(operation6) {
        case 1:
            prodfin = (cmetot / (result11));
        break;
    }

    var prodfin = document.getElementById("prodfin").value = prodfin;

}