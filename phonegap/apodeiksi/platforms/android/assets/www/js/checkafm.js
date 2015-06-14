function IsNumeric(num) 
{
     if (!(num<=0) && !(num >0))
        {
        return true;
        }
     else
        {
        return false;
        }
}
function CheckAFM(afm)
{
//alert(document.URL.substr(7,2))    
    sAFM =String(afm)
    if(document.frm.txtAr_AFM.value.indexOf(sAFM)>=0)
    {return false;}

    if (afm.length <9 || afm.length >9)
    {
        alert("Ο Α.Φ.Μ. πρέπει να έχει μήκος 9 χαρακτήρων");
        return false;
    }

    if (IsNumeric(afm))
    {
        alert("Ο Α.Φ.Μ. πρέπει να περιέχει μόνο αριθμητικούς  χαρακτήρες");
        return false;
    }
    var A = new Array()
    var k=2
    var total =0
    var result = 0
    var c=1
    
    for (i=0; i<=8; i++)
    {
    c ++
    A[i]= sAFM.substr(9-c + 1, 1);
    
    }
    
     
    for (i=1; i<=8; i++)
    {
	total = total + A[i] * k;
	k = k * 2;
    }
    result = total % 11;
    
    var vA = parseInt(A[0])
    
    if (vA==result || result == 10 && vA == 0)
    {
     if (document.frm.txtAr_AFM.value=="")
        {
        afms = afm;
        document.frm.txtAr_AFM.value=afms + "\t" + "Έγκυρο";
        }
     else
        {
        afms = document.frm.txtAr_AFM.value + "\n" + afm + "\t" + "Έγκυρο";
        document.frm.txtAr_AFM.value=afms;
        }
    }
    else
    {
    alert("Λάθος Α.Φ.Μ.")
    }
    

}
