function cal(op1) {
    var b1 = document.getElementById("numac1").value;
    var b2 = document.getElementById("numac2").value;
    var b3 = document.getElementById("numac3").value;
    var b4 = document.getElementById("numac4").value;
    var b5 = document.getElementById("numac5").value;
    var b6 = document.getElementById("numac6").value;
    var b6_1 = document.getElementById("numdc1").value;

    numac1 = Number(b1);
    numac2 = Number(b2);
    numac3 = Number(b3);
    numac4 = Number(b4);
    numac5 = Number(b5);
    numac6 = Number(b6);
    numdc1 = Number(b6_1);

    switch(op1) {
        case 1:
            sum_apa1 = numac1 + numac2 + numac3 + numac4 + numac5 + numac6 + numdc1;
        break;
    }

    var sum_apa1 = document.getElementById("sum_apa1").value = sum_apa1;

}

function cal1(op2) {
    var b7 = document.getElementById("pot1").value;
    var b8 = document.getElementById("pot2").value;
    var b9 = document.getElementById("pot3").value;
    var b10 = document.getElementById("pot4").value;
    var b11 = document.getElementById("pot5").value;
    var b12 = document.getElementById("pot6").value;
    var b12_1 = document.getElementById("pot7").value;

    pot1 = Number(b7);
    pot2 = Number(b8);
    pot3 = Number(b9);
    pot4 = Number(b10);
    pot5 = Number(b11);
    pot6 = Number(b12);
    pot7 = Number(b12_1);

    switch(op2) {
        case 1:
            sum_pot1 = pot1 + pot2 + pot3 + pot4 + pot5 + pot6 + pot7;
        break;
    }

    var sum_pot1 = document.getElementById("sum_pot1").value = sum_pot1;

}

function cal2(op3) {
    var b13 = document.getElementById("uso1").value;
    var b14 = document.getElementById("uso2").value;
    var b15 = document.getElementById("uso3").value;
    var b16 = document.getElementById("uso4").value;
    var b17 = document.getElementById("uso5").value;
    var b18 = document.getElementById("uso6").value;
    var b18_1 = document.getElementById("uso7").value;

    uso1 = Number(b13);
    uso2 = Number(b14);
    uso3 = Number(b15);
    uso4 = Number(b16);
    uso5 = Number(b17);
    uso6 = Number(b18);
    uso7 = Number(b18_1);

    switch(op3) {
        case 1:
            sum_uso1 = uso1 + uso2 + uso3 + uso4 + uso5 + uso6 + uso7;
        break;
    }

    var sum_uso1 = document.getElementById("sum_uso1").value = sum_uso1;

}

function cal3(op4) {
    var b19 = document.getElementById("numac1").value;
    var b20 = document.getElementById("numac2").value;
    var b21 = document.getElementById("numac3").value;
    var b22 = document.getElementById("numac4").value;
    var b23 = document.getElementById("numac5").value;
    var b24 = document.getElementById("numac6").value;
    var b24_1 = document.getElementById("numdc1").value;
    var b25 = document.getElementById("pot1").value;
    var b26 = document.getElementById("pot2").value;
    var b27 = document.getElementById("pot3").value;
    var b28 = document.getElementById("pot4").value;
    var b29 = document.getElementById("pot5").value;
    var b30 = document.getElementById("pot6").value;
    var b30_1 = document.getElementById("pot7").value;

    numac1 = Number(b19);
    numac2 = Number(b20);
    numac3 = Number(b21);
    numac4 = Number(b22);
    numac5 = Number(b23);
    numac6 = Number(b24);
    numac7 = Number(b24_1);
    pot1 = Number(b25);
    pot2 = Number(b26);
    pot3 = Number(b27);
    pot4 = Number(b28);
    pot5 = Number(b29);
    pot6 = Number(b30);
    pot7 = Number(b30_1);


    switch(op4) {
        case 1:
            pot_t1 = numac1 * pot1;
            pot_t2 = numac2 * pot2;
            pot_t3 = numac3 * pot3;
            pot_t4 = numac4 * pot4;
            pot_t5 = numac5 * pot5;
            pot_t6 = numac6 * pot6;
            pot_t7 = numac7 * pot7;
        break;
    }

    var pot_t1 = document.getElementById("pot_t1").value = pot_t1;
    var pot_t2 = document.getElementById("pot_t2").value = pot_t2;
    var pot_t3 = document.getElementById("pot_t3").value = pot_t3;
    var pot_t4 = document.getElementById("pot_t4").value = pot_t4;
    var pot_t5 = document.getElementById("pot_t5").value = pot_t5;
    var pot_t6 = document.getElementById("pot_t6").value = pot_t6;
    var pot_t7 = document.getElementById("pot_t7").value = pot_t7;

}

function cal4(op5) {
    var b31 = document.getElementById("pot_t1").value;
    var b32 = document.getElementById("pot_t2").value;
    var b33 = document.getElementById("pot_t3").value;
    var b34 = document.getElementById("pot_t4").value;
    var b35 = document.getElementById("pot_t5").value;
    var b36 = document.getElementById("pot_t6").value;
    var b36_1 = document.getElementById("pot_t7").value;
    var b37 = document.getElementById("uso1").value;
    var b38 = document.getElementById("uso2").value;
    var b39 = document.getElementById("uso3").value;
    var b40 = document.getElementById("uso4").value;
    var b41 = document.getElementById("uso5").value;
    var b42 = document.getElementById("uso6").value;
    var b42_1 = document.getElementById("uso7").value;

    pot_t1 = Number(b31);
    pot_t2 = Number(b32);
    pot_t3 = Number(b33);
    pot_t4 = Number(b34);
    pot_t5 = Number(b35);
    pot_t6 = Number(b36);
    pot_t7 = Number(b36_1);
    uso1 = Number(b37);
    uso2 = Number(b38);
    uso3 = Number(b39);
    uso4 = Number(b40);
    uso5 = Number(b41);
    uso6 = Number(b42);
    uso7 = Number(b42_1);


    switch(op5) {
        case 1:
            ener1 = (pot_t1 / 0.89)* uso1;
            ener2 = (pot_t2 / 0.89)* uso2;
            ener3 = (pot_t3 / 0.89)* uso3;
            ener4 = (pot_t4 / 0.89)* uso4;
            ener5 = (pot_t5 / 0.89)* uso5;
            ener6 = (pot_t6 / 0.89)* uso6;
            ener7 = (pot_t7)* uso7;
        break;
    }

    var ener1 = document.getElementById("ener1").value = ener1;
    var ener2 = document.getElementById("ener2").value = ener2;
    var ener3 = document.getElementById("ener3").value = ener3;
    var ener4 = document.getElementById("ener4").value = ener4;
    var ener5 = document.getElementById("ener5").value = ener5;
    var ener6 = document.getElementById("ener6").value = ener6;
    var ener7 = document.getElementById("ener7").value = ener7;

}

function cal5(op6) {
    var b43 = document.getElementById("pot_t1").value;
    var b44 = document.getElementById("pot_t2").value;
    var b45 = document.getElementById("pot_t3").value;
    var b46 = document.getElementById("pot_t4").value;
    var b47 = document.getElementById("pot_t5").value;
    var b48 = document.getElementById("pot_t6").value;
    var b48_1 = document.getElementById("pot_t7").value;

    pot_t1 = Number(b43);
    pot_t2 = Number(b44);
    pot_t3 = Number(b45);
    pot_t4 = Number(b46);
    pot_t5 = Number(b47);
    pot_t6 = Number(b48);
    pot_t7 = Number(b48_1);

    switch(op6) {
        case 1:
            sum_pot_t = pot_t1 + pot_t2 + pot_t3 + pot_t4 + pot_t5 + pot_t6 + pot_t7;
        break;
    }

    var sum_pot_t = document.getElementById("sum_pot_t").value = sum_pot_t;

}

function cal6(op7) {
    var b49 = document.getElementById("ener1").value;
    var b50 = document.getElementById("ener2").value;
    var b51 = document.getElementById("ener3").value;
    var b52 = document.getElementById("ener4").value;
    var b53 = document.getElementById("ener5").value;
    var b54 = document.getElementById("ener6").value;
    var b54_1 = document.getElementById("ener7").value;

    ener1 = Number(b49);
    ener2 = Number(b50);
    ener3 = Number(b51);
    ener4 = Number(b52);
    ener5 = Number(b53);
    ener6 = Number(b54);
    ener7 = Number(b54_1);

    switch(op7) {
        case 1:
            sum_ener = ener1 + ener2 + ener3 + ener4 + ener5 + ener6 + ener7;
        break;
    }

    var sum_ener = document.getElementById("sum_ener").value = sum_ener;
    var sum_ener = document.getElementById("enertotdiv").value = sum_ener;

}

function cal7(op8) {
    var b55 = document.getElementById("enertotdiv").value;

    enertotdiv = Number(b55);

    switch(op8) {
        case 1:
            ener_sum_t = (enertotdiv) * (1 + 0.17);
        break;
    }

    var ener_sum_t = document.getElementById("ener_sum_t").value = ener_sum_t;

}

function cal8(op9) {
    var b56 = document.getElementById("ener_sum_t").value;
    var b57 = document.getElementById("hsslow").value;

    ener_sum_t = Number(b56);
    hsslow = Number(b57);

    switch(op9) {
        case 1:
            pot_gfv = ener_sum_t / hsslow;
        break;
    }

    var pot_gfv = document.getElementById("pot_gfv").value = pot_gfv;

    if (hsslow == "0") {
        alert("No se permiten campos vacios en: Valor del mes con el peor promedio de radiación solar diaría del lugar escogido");
    }

}

function cal9(op10) {
    var b58 = document.getElementById("pot_t1").value;
    var b59 = document.getElementById("pot_t2").value;
    var b60 = document.getElementById("pot_t3").value;
    var b61 = document.getElementById("pot_t4").value;
    var b62 = document.getElementById("pot_t5").value;
    var b63 = document.getElementById("pot_t6").value;
    var b64 = document.getElementById("pot_t7").value;

    pot_t1 = Number(b58);
    pot_t2 = Number(b59);
    pot_t3 = Number(b60);
    pot_t4 = Number(b61);
    pot_t5 = Number(b62);
    pot_t6 = Number(b63);
    pot_t7 = Number(b64);

    switch(op10) {
        case 1:
            pot_sis = (pot_t1 / 0.89) + (pot_t2 / 0.89) + (pot_t3 / 0.89) + (pot_t4 / 0.89) + (pot_t5 / 0.89) + (pot_t6 / 0.89) + (pot_t7);
        break;
    }

    var pot_sis = document.getElementById("pot_sis").value = pot_sis;

}

function cal10(op11) {
    var b65 = document.getElementById("pot_gfv").value;
    var b66 = document.getElementById("cepfv3").value;

    pot_gfv = Number(b65);
    cepfv3 = Number(b66);

    switch(op11) {
        case 1:
            cepfv6 = pot_gfv / cepfv3;
            cepfv7 = Math.ceil(pot_gfv / cepfv3);
        break;
    }

    var cepfv6 = document.getElementById("cepfv6").value = cepfv6;
    var cepfv7 = document.getElementById("cepfv7").value = cepfv7;

}

function cal11(op12) {
    var b67 = document.getElementById("pepfv").value;
    var b68 = document.getElementById("pepfv1").value;
    var b69 = document.getElementById("cepfv1").value;
    var b70 = document.getElementById("cepfv2").value;
    var b71 = document.getElementById("cepfv4").value;
    var b72 = document.getElementById("cepfv5").value;

    pepfv = Number(b67);
    pepfv1 = Number(b68);
    cepfv1 = Number(b69);
    cepfv2 = Number(b70);
    cepfv4 = Number(b71);
    cepfv5 = Number(b72);

    switch(op12) {
        case 1:
            pepfv2 = cepfv1 * pepfv;
            pepfv3 = cepfv2 * pepfv1;
            pepfv4 = cepfv4 * pepfv;
            pepfv5 = cepfv5 * pepfv1;
        break;
    }

    var pepfv2 = document.getElementById("pepfv2").value = pepfv2;
    var pepfv3 = document.getElementById("pepfv3").value = pepfv3;
    var pepfv4 = document.getElementById("pepfv4").value = pepfv4;
    var pepfv5 = document.getElementById("pepfv5").value = pepfv5;

}

function cal12(op13) {
    var b73 = document.getElementById("pepfv2").value;
    var b74 = document.getElementById("pot_sis").value;

    pepfv2 = Number(b73);
    pot_sis = Number(b74);

    switch(op13) {
        case 1:
            pepfv6 = pot_sis / pepfv2;
            pepfv7 = pot_sis;
        break;
    }

    var pepfv6 = document.getElementById("pepfv6").value = pepfv6;
    var pepfv7 = document.getElementById("pepfv7").value = pepfv7;

}

function cal13(op14) {
    var b75 = document.getElementById("ener_sum_t").value;

    ener_sum_t = Number(b75);

    switch(op14) {
        case 1:
            dbu4 = ener_sum_t / 12;
        break;
    }

    var dbu4 = document.getElementById("dbu4").value = dbu4;

}

function cal14(op15) {
    var b76 = document.getElementById("dbu4").value;
    var b77 = document.getElementById("dbu5").value;

    dbu4 = Number(b76);
    dbu5 = Number(b77);

    switch(op15) {
        case 1:
            dbu6 = dbu4 * dbu5;
        break;
    }

    var dbu6 = document.getElementById("dbu6").value = dbu6;

}

function cal15(op16) {
    var b78 = document.getElementById("dbu6").value;
    var b79 = document.getElementById("dbu3").value;

    dbu6 = Number(b78);
    dbu3 = Number(b79);

    switch(op16) {
        case 1:
            dbu7 = dbu6 / dbu3;
        break;
    }

    var dbu7 = document.getElementById("dbu7").value = dbu7;

}

function cal16(op17) {
    var b80 = document.getElementById("dbu1").value;
    var b81 = document.getElementById("dbu7").value;

    dbu1 = Number(b80);
    dbu7 = Number(b81);

    switch(op17) {
        case 1:
            dbu8 = 12 / 12;
            dbu9 = dbu7 / dbu1;
        break;
    }

    var dbu8 = document.getElementById("dbu8").value = dbu8;
    var dbu9 = document.getElementById("dbu9").value = dbu9;

}

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
    
    if (pnominv == "0") {
        alert("No se permiten campos vacios en: Factor de dimensionamiento del inversor");
    }
}
function calc4(operation5) {
    var n1014 = document.getElementById("pmaxmod").value;
    var n1015 = document.getElementById("result11").value;

    pmaxmod = Number(n1014);
    result11 = Number(n1015);
    
    switch(operation5) {
        case 1:
            modu = Math.ceil(((result11 * 1000) / pmaxmod));
        break;
    }
    
    var modu = document.getElementById("modu").value = modu;
    
    if (pmaxmod == "0") {
        alert("No se permiten campos vacios en: Número de módulos");
    }
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
