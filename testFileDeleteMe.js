function ShiftDifferential_OnChange() {

    var shiftField = Xrm.Page.getAttribute("cda_shiftdifferentialbridge");
    var shiftDiffSection = Xrm.Page.ui.tabs.get("bridgeconfigurations").get("bridgeconfigurations_ShiftDiff");
    var SHIFT_DIFF_IS_ACTIVE = "754440000";
    try {
        if (shiftField.getValue() == SHIFT_DIFF_IS_ACTIVE) {
            shiftDiffSection.setVisible(true);  
        }                    
        else {
           shiftDiffSection.setVisible(false);      
        }
    }
    catch (exception) {
        console.log(e.message);
        // do nothing.
    }
} 
