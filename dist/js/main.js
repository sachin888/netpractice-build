/** Table Pagination Starts **/
$.fn.pageMe = function(opts){
    var $this = this,
        defaults = {
            perPage: 3,
            showPrevNext: false,
            hidePageNumbers: false
        },
        settings = $.extend(defaults, opts);
    
    var listElement = $this;
    var perPage = settings.perPage; 	
    var children = listElement.children();
    var pager = $('.pager');
    
    if (typeof settings.childSelector!="undefined") {
        children = listElement.find(settings.childSelector);
    }
    
    if (typeof settings.pagerSelector!="undefined") {
        pager = $(settings.pagerSelector);
    }
    
    var numItems = children.size();
    var numPages = Math.ceil(numItems/perPage);
    pager.data("curr",0);
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="prev_link">«</a></li>').appendTo(pager);
    }
    
    var curr = 0;
    while(numPages > curr && (settings.hidePageNumbers==false)){
        $('<li><a href="#" class="page_link">'+(curr+1)+'</a></li>').appendTo(pager);
        curr++;
    }
    
    if (settings.showPrevNext){
        $('<li><a href="#" class="next_link">»</a></li>').appendTo(pager);
    }
    
    pager.find('.page_link:first').addClass('active');
    pager.find('.prev_link').hide();
    if (numPages<=1) {
        pager.find('.next_link').hide();
    }
  	pager.children().eq(1).addClass("active");
    
    children.hide();
    children.slice(0, perPage).show();
    
    pager.find('li .page_link').click(function(){
        var clickedPage = $(this).html().valueOf()-1;
        goTo(clickedPage,perPage);
        return false;
    });
    pager.find('li .prev_link').click(function(){
        previous();
        return false;
    });
    pager.find('li .next_link').click(function(){
        next();
        return false;
    });
    
    function previous(){
        var goToPage = parseInt(pager.data("curr")) - 1;
        goTo(goToPage);
    }
     
    function next(){
        goToPage = parseInt(pager.data("curr")) + 1;
        goTo(goToPage);
    }
    
    function goTo(page){
        var startAt = page * perPage,
            endOn = startAt + perPage;
        
        children.css('display','none').slice(startAt, endOn).show();
        
        if (page>=1) {
            pager.find('.prev_link').show();
        }
        else {
            pager.find('.prev_link').hide();
        }
        
        if (page<(numPages-1)) {
            pager.find('.next_link').show();
        }
        else {
            pager.find('.next_link').hide();
        }
        
        pager.data("curr",page);
      	pager.children().removeClass("active");
        pager.children().eq(page+1).addClass("active");
    
    }
};
/** Table Pagination Ends **/
$(document).ready(function(){	
	$('.receive-payment-wrap,.edit-info-wrap,.ac-btn-grp, .clinical-history-wrap,.consulting-history-details,.view-prescription-details,.view-notes-details, .claim-transaction-wrap, .claim-more-details,#consultation-result, #consultation-result-content,.add-venue-details,.edit-venue-details,.add-venue-btn-wrap,.edit-venue-btn-wrap, .add-user-details, .edit-user-details,.add-user-btn-wrap,.edit-user-btn-wrap,.add-practice-details,.edit-practice-details,.add-practice-btn-wrap,.edit-practice-btn-wrap,.appointment-step2,.appointment-step3').hide();
	
	$('.receive-payment').click(function(e){
		e.preventDefault();
		$(this).toggleClass('is-active');
		if($(this).hasClass('is-active')){
			$('.accountTable .receive-payment-wrap').show();
			$('#account-history .ac-btn-grp, #account-history-collapse .ac-btn-grp').show();		
			if($('.accountTable .edit-info-wrap').is(':visible')) {
				$('.accountTable .edit-info-wrap').hide();
			}
		}else{
			$('.accountTable .receive-payment-wrap').hide();	
			$('#account-history .ac-btn-grp, #account-history-collapse .ac-btn-grp').hide();
		}		
	});
	
	 $('.edit-info').click(function(e){
		e.preventDefault();
		$(this).toggleClass('is-active');
		if($(this).hasClass('is-active')){
			$('.accountTable .edit-info-wrap').show();	
			$('#account-history .ac-btn-grp, #account-history-collapse .ac-btn-grp').show();	
			if($('.accountTable .receive-payment-wrap').is(':visible')) {
				$('.accountTable .receive-payment-wrap').hide();
			}
		}else{
			$('.accountTable .edit-info-wrap').hide();	
			$('#account-history .ac-btn-grp, #account-history-collapse .ac-btn-grp').hide();	
		}
	}); 	
	
	/** Patient History tabs hide show () **/	
	$('.clinical-his-icon').click(function(e){
		e.preventDefault();
		$(this).toggleClass('is-active');
		if($(this).hasClass('is-active')){
			$('.clinicalHistoryTable .clinical-history-wrap').show();	
			$('#clinical-history .ac-btn-grp, #clinical-history-collapse .ac-btn-grp').show();	
		}else{
			$('.clinicalHistoryTable .clinical-history-wrap').hide();	
			$('#clinical-history .ac-btn-grp, #clinical-history-collapse .ac-btn-grp').hide();	
		}
	});
	
	$('.consulting-his-details').click(function(e){
		e.preventDefault();
		$(this).toggleClass('is-active');
		if($(this).hasClass('is-active')){
			$('.consulting-history-details').show();
			$('#consulting-history .ac-btn-grp, #consulting-history-collapse .ac-btn-grp').show();	
			if($('.consultingHistoryTable .view-prescription-details,.consultingHistoryTable .view-notes-details').is(':visible')){
				$('.consultingHistoryTable .view-prescription-details,.consultingHistoryTable .view-notes-details').hide();
			}
		}else{
			$('.consulting-history-details').hide();
			$('#consulting-history .ac-btn-grp, #consulting-history-collapse .ac-btn-grp').hide();	
		}	
	});	
	
	$('.view-prescription').click(function(e){
		e.preventDefault();
		$(this).toggleClass('is-active');
		if($(this).hasClass('is-active')){
			$('.view-prescription-details, #consulting-history .ac-btn-grp').show();	
			if($('.consultingHistoryTable .consulting-history-details,.consultingHistoryTable .view-notes-details').is(':visible')){
				$('.consultingHistoryTable .consulting-history-details,.consultingHistoryTable .view-notes-details').hide();
			}
		}else{
			$('.view-prescription-details, #consulting-history .ac-btn-grp').hide();
		}		
	});
	
	$('.view-notes').click(function(e){
		e.preventDefault();
			$(this).toggleClass('is-active');
			if($(this).hasClass('is-active')){
				$('.view-notes-details, #consulting-history .ac-btn-grp').show();	
				if($('.consultingHistoryTable .consulting-history-details,.consultingHistoryTable .view-prescription-details').is(':visible')){
					$('.consultingHistoryTable .consulting-history-details,.consultingHistoryTable .view-prescription-details').hide();
				}
			}else{
				$('.view-notes-details, #consulting-history .ac-btn-grp').hide();
			}		
	});
	/** Patient History tabs hide show () **/
	
	var viewportWidth = $(window).width();
	if(viewportWidth <= 767){
		$('#consultation-result, #consultation-result-content').hide();
		var medicalReport = $('.medical-report').html();
		var referralLetter = $('.referral-letter').html();
		var sickNotes = $('.sick-notes').html();
		var medicalReportCont = $('#medical-report').html();
		var referralLetterCont = $('#referral-letter').html();
		var sickNotesCont = $('#sick-notes').html();
		$('.view-notes-details .search-result').append('<div class="accordion-wrap"><h3 class="active">'+medicalReport+'</h3><div class="current">'+medicalReportCont+'</div><h3>'+referralLetter+'</h3><div class="">'+referralLetterCont+'</div><h3>'+sickNotes+'</h3><div class="">'+sickNotesCont+'</div></div>')
		$('.accordion-wrap div').hide();
		$('.accordion-wrap h3.active').next().show();
		$('.accordion-wrap h3').on('click',function(){
			$(this).toggleClass('active');
			$(this).siblings('h3').removeClass('active');
			if($(this).hasClass('active')){
				$(this).next().slideDown();
				$(this).next().siblings('div').slideUp();
			}else{
				$(this).next().slideUp();
			}
		});
	}else{
		$('#consultation-result, #consultation-result-content').show();
	}
	
	$('.claim-details').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('is-active');
		if($(this).hasClass('is-active')){
			$('.claim-transaction-wrap').show();
		}else{
			$(this).removeClass('is-active');
			$('.claim-transaction-wrap').hide();
			$('.claim-more-details').hide();
		}
		
	});
	
	$('.show-more-details').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('is-active');
		if($(this).hasClass('is-active')){
			$('.claim-more-details').show();
		}else{
			$(this).removeClass('is-active');
			//$('.claim-more-details').hide();
		} 
		
	});
	/** Claim transation table pagintion **/	
		$('#claimTransTable').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:3});
	/** Claim transation table pagintion **/
	
	/** add edit venue */
	$('.add-venue-btn').click(function(e){
		e.preventDefault();
			$(this).toggleClass('is-active');
			 if($(this).hasClass('is-active')){
				$('.add-venue-details, .add-venue-btn-wrap').show();	
				$('.edit-venue-details, .edit-venue-btn-wrap').hide();
				
			}else{
				$('.add-venue-details, .add-venue-btn-wrap').hide();
			}		 
	});
	$('.edit-venue').click(function(e){
		e.preventDefault();
			$(this).toggleClass('is-active');
			 if($(this).hasClass('is-active')){
				$('.edit-venue-details, .edit-venue-btn-wrap').show();	
				$('.add-venue-details, .add-venue-btn-wrap').hide();
			}else{
				$('.edit-venue-details,.edit-venue-btn-wrap').hide();
			}		 
	});
	/** add edit venue */
	/** add edit user */
	$('.add-user-btn').click(function(e){
		e.preventDefault();
			$(this).toggleClass('is-active');
			 if($(this).hasClass('is-active')){
				$('.add-user-details, .add-user-btn-wrap').show();	
				$('.edit-user-details, .edit-user-btn-wrap').hide();
				
			}else{
				$('.add-user-details, .add-user-btn-wrap').hide();
			}		 
	});
	$('.edit-user-icon').click(function(e){
		e.preventDefault();
			$(this).toggleClass('is-active');
			 if($(this).hasClass('is-active')){
				$('.edit-user-details, .edit-user-btn-wrap').show();	
				$('.add-user-details, .add-user-btn-wrap').hide();
			}else{
				$('.edit-user-details,.edit-user-btn-wrap').hide();
			}		 
	});
	/** add edit user */
	
	$('<label class="box-heading">Venue</label>').insertBefore('.multi-select-wrap .box1 .btn-group');
	$('<label class="box-heading">Allocated Venues</label>').insertBefore('.multi-select-wrap .box2 .btn-group');
	
	
	/** add edit Practice */
	$('.add-practice-btn').click(function(e){
		e.preventDefault();
			$(this).toggleClass('is-active');
			 if($(this).hasClass('is-active')){
				$('.add-practice-details, .add-practice-btn-wrap').show();	
				$('.edit-practice-details, .edit-practice-btn-wrap').hide();
				$('.new-practice-btnwrap').show();
				//$('#add-new-practice-wrap').tabCollapse();
			}else{
				$('.add-practice-details, .add-practice-btn-wrap').hide();
				$('.new-practice-btnwrap').hide();
			}		 
	});
	$('.edit-practice-icon').click(function(e){
		e.preventDefault();
			$(this).toggleClass('is-active');
			 if($(this).hasClass('is-active')){
				$('.edit-practice-details, .edit-practice-btn-wrap').show();	
				$('.add-practice-details, .add-practice-btn-wrap').hide();
				$('.new-practice-btnwrap').show();
			}else{
				$('.edit-practice-details,.edit-practice-btn-wrap').hide();
			}		 
	});
	/** add edit Practice */
	/** Login **/
		$('.submit-btn').click(function(){
				//e.preventDefault();
				$(this).addClass('active');
				if($(this).hasClass('active')) {
					$('.login-success').show();
					$(this).parentsUntil('.main-content').hide();
				}
			
		});
	/** Login **/
	$('.dosage-accordion h4').click(function(){
		
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$(this).next().slideDown();
			$(this).parent().siblings().find('div').slideUp();
			$(this).parent().siblings().find('h4 i.fa').addClass('fa-plus').removeClass('fa-minus');
			
			$(this).find('i.fa').addClass('fa-minus').removeClass('fa-plus');
		}else{
			$(this).next().slideUp();
			$(this).find('i.fa').addClass('fa-plus').removeClass('fa-minus');
		}
	});	
	
	function customCheckbox(checkboxName){
        var checkBox = $('input[name="'+ checkboxName +'"]');
        $(checkBox).each(function(){
            $(this).wrap( "<span class='custom-checkbox'></span>" );
            if($(this).is(':checked')){
                $(this).parent().addClass("selected");
            }
        });
        $(checkBox).click(function(){
            $(this).parent().toggleClass("selected");
        });
    }
    customCheckbox("confirm");          // add appointment - contact information tab
    customCheckbox("assist-modifier"); // Consultation checkbox
    customCheckbox("accept"); // Regster practice checkbox

	
	function customRadio(radioName){
        var radioButton = $('input[name="'+ radioName +'"]');
        $(radioButton).each(function(){
            $(this).wrap( "<span class='custom-radio'></span>" );
            if($(this).is(':checked')){
                $(this).parent().addClass("selected");
            }
        });
        $(radioButton).click(function(){
            if($(this).is(':checked')){
                $(this).parent().addClass("selected");
            }
            $(radioButton).not(this).each(function(){
                $(this).parent().removeClass("selected");
            });
        });
    }
    customRadio("payment-info"); // add appointment - billing information tab
    customRadio("action");      // Consultation radio buttons
    customRadio("function");   // Consultation radio buttons
    customRadio("bill-to");   // Consultation radio buttons
	
	/* Appointment confirmation tab status show */
	$('.show-confirm-status').click(function(){		
		$('.appointment-status').show();
	});
    /* Appointment confirmation tab status show */
	/* Add new patient tabs */
	$('.add-new-patient-wrap .confirm-btn, .private-radio-details,.payment-radio-details').hide();

	$('.add-new-patient-wrap .save-btn').click(function(){
		$('#add-new-patient-wrap.nav-tabs > .active').next('li').find('a').trigger('click');
		$('#add-new-patient-wrap-accordion').find('div.in').parent().addClass('open');

		if($('.consulting-history').hasClass('active')){
			$('.add-new-patient-wrap .confirm-btn').show();
			$('.add-new-patient-wrap .save-btn').hide();	
		}else{
			$('.add-new-patient-wrap .confirm-btn').hide();
			$('.add-new-patient-wrap .save-btn').show();
		}
		
		if($('.clinical-history').hasClass('active')){
			$('.add-new-patient-wrap .back-btn').attr('disabled');
			$('.add-new-patient-wrap .back-btn').css('cursor','not-allowed');
		}else {
			$('.add-new-patient-wrap .back-btn').removeAttr('disabled');
			$('.add-new-patient-wrap .back-btn').css('cursor','pointer');
		}
	});

	$('.add-new-patient-wrap .back-btn').click(function(){
		$('#add-new-patient-wrap.nav-tabs > .active').prev('li').find('a').trigger('click');
		if($('.consulting-history').hasClass('active')){
			$('.add-new-patient-wrap .confirm-btn').show();
			$('.add-new-patient-wrap .save-btn').hide();	
		}else{
			$('.add-new-patient-wrap .confirm-btn').hide();
			$('.add-new-patient-wrap .save-btn').show();
		}
		
		if($('.clinical-history').hasClass('active')){
			$('.add-new-patient-wrap .back-btn').attr('disabled');
			$('.add-new-patient-wrap .back-btn').css('cursor','not-allowed');
		}else {
			$('.add-new-patient-wrap .back-btn').removeAttr('disabled');
			$('.add-new-patient-wrap .back-btn').css('cursor','pointer');
		}
	});
	if($('.clinical-history').hasClass('active')){
		$('.add-new-patient-wrap .back-btn').css('cursor','not-allowed');
	}else{
		$('.add-new-patient-wrap .back-btn').css('cursor','pointer');
	}
	$('#add-new-patient-wrap li').click(function(){
		console.log("sdf");
		if(!(($(this).hasClass('clinical-history')) && ($(this).hasClass('active')))){
			$('.add-new-patient-wrap .back-btn').css('cursor','pointer');
			console.log("iffff");
		}else{
			$('.add-new-patient-wrap .back-btn').css('cursor','not-allowed');
			
			console.log("else");
		}
	});
	$('.medical-radio').click(function(){
		$('.medical-radio-details').show();
		$('.private-radio-details,.payment-radio-details').hide();
	});
	$('.private-radio').click(function(){
		$('.private-radio-details').show();
		$('.medical-radio-details,.payment-radio-details').hide();
	});
	$('.payment-radio').click(function(){
		$('.payment-radio-details').show();
		$('.medical-radio-details,.private-radio-details').hide();
	});
	winWidth = $(window).width();
	if(winWidth < 767){
		$('.new-patient-btnwrap').insertAfter('#add-new-patient-wrap-accordion');
	}
	
	/* user Privileges */
	$('<label class="box-heading">Privileges</label>').insertBefore('.prev-multi-select-wrap .box1 .btn-group');
	$('<label class="box-heading">Assigned Privileges</label>').insertBefore('.prev-multi-select-wrap .box2 .btn-group');
	
	$('.new-practice-btnwrap .confirm-btn').hide();
	$('.new-practice-btnwrap .save-btn').click(function(){
		$('#add-new-practice-wrap.nav-tabs > .active').next('li').find('a').trigger('click');
		$('#add-new-practice-wrap-accordion').find('div.in').parent().addClass('open');

		if($('.admin-details').hasClass('active')){
			$('.new-practice-btnwrap .confirm-btn').show();
			$('.new-practice-btnwrap .save-btn').hide();	
		}else{
			$('.new-practice-btnwrap .confirm-btn').hide();
			$('.new-practice-btnwrap .save-btn').show();
		}
		
		if($('.practice-details').hasClass('active')){
			$('.new-practice-btnwrap .back-btn').attr('disabled');
			$('.new-practice-btnwrap .back-btn').css('cursor','not-allowed');
		}else {
			$('.new-practice-btnwrap .back-btn').removeAttr('disabled');
			$('.new-practice-btnwrap .back-btn').css('cursor','pointer');
		}
	});
	
	$('.new-practice-btnwrap .back-btn').click(function(){
		$('#add-new-practice-wrap.nav-tabs > .active').prev('li').find('a').trigger('click');
		if($('.admin-details').hasClass('active')){
			$('.new-practice-btnwrap .confirm-btn').show();
			$('.new-practice-btnwrap .save-btn').hide();	
		}else{
			$('.new-practice-btnwrap .confirm-btn').hide();
			$('.new-practice-btnwrap .save-btn').show();
		}
		
		if($('.practice-details').hasClass('active')){
			$('.new-practice-btnwrap .back-btn').attr('disabled');
			$('.new-practice-btnwrap .back-btn').css('cursor','not-allowed');
		}else {
			$('.new-practice-btnwrap .back-btn').removeAttr('disabled');
			$('.new-practice-btnwrap .back-btn').css('cursor','pointer');
		}
	});
	if($('.practice-details').hasClass('active')){
		$('.new-practice-btnwrap .back-btn').css('cursor','not-allowed');
	}else{
		$('.new-practice-btnwrap .back-btn').css('cursor','pointer');
	}
	$('#add-new-practice-wrap li').click(function(){
		if(!(($(this).hasClass('practice-details')) && ($(this).hasClass('active')))){
			$('.new-practice-btnwrap .back-btn').css('cursor','pointer');
		}else{
			$('.new-practice-btnwrap .back-btn').css('cursor','not-allowed');
		}
	});
	
	var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
		console.log(windowsize);
        if (windowsize < 767) {
            $('#myTab').tabCollapse();
			$('#consultationTab').tabCollapse();
        }
    } 
    checkWidth();
    $(window).resize(checkWidth);
});