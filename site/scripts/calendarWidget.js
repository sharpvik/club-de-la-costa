$(document).ready(function() {

    $(".date").on('click', function() {
        // variables
        var dateChoice = $(this).html(),
            dateLastNumber = dateChoice.slice(-1),
            $name = $("#special_name"),
            $desc = $("#special_desc"),
            $com = $("#special_com"),
            name, desc, com;
        
        // change the date_current
        if ( ((dateLastNumber >= 1) && (dateLastNumber <= 3)) && ((dateChoice < 11) || (dateChoice > 13)) ) {
            if (dateLastNumber == 1) {
                $("#current_date").html(dateChoice + 'st');
            } else if (dateLastNumber == 2) {
                $("#current_date").html(dateChoice + 'nd');
            } else if (dateLastNumber == 3) {
                $("#current_date").html(dateChoice + 'rd');
            }
        } else {
            $("#current_date").html(dateChoice + 'th');
        }
        
        // change the picked_date class
        $(".date").removeClass("picked_date");
        $(this).addClass("picked_date");
        
        // change info
        switch (dateChoice) {
            case "1":
                name = "Super Mega Special Gods' food";
                desc = "Delicious bread with hilarious onions";
                com = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, nisi a aliquet pretium, sem lorem iaculis lorem, ut semper lorem justo quis lectus. Integer tincidunt fermentum luctus. In ut est ligula. Aliquam congue felis tortor, nec iaculis leo facilisis ut. Ut vitae mauris arcu. Aliquam feugiat dolor vitae justo auctor, eu sodales odio pretium. Phasellus efficitur condimentum orci, sit amet volutpat justo varius eu. Donec lacinia at sapien ac elementum.";
                break;
            case "2":
                name = "Super Mega Special Gods' food2";
                desc = "Delicious bread with hilarious onions2";
                com = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, nisi a aliquet pretium, sem lorem iaculis lorem, ut semper lorem justo quis lectus. Integer tincidunt fermentum luctus. In ut est ligula. Aliquam congue felis tortor, nec iaculis leo facilisis ut. Ut vitae mauris arcu. Aliquam feugiat dolor vitae justo auctor, eu sodales odio pretium. Phasellus efficitur condimentum orci, sit amet volutpat justo varius eu. Donec lacinia at sapien ac elementum.2";
                break;
            case "3":
                name = "Super Mega Special Gods' food3";
                desc = "Delicious bread with hilarious onions3";
                com = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, nisi a aliquet pretium, sem lorem iaculis lorem, ut semper lorem justo quis lectus. Integer tincidunt fermentum luctus. In ut est ligula. Aliquam congue felis tortor, nec iaculis leo facilisis ut. Ut vitae mauris arcu. Aliquam feugiat dolor vitae justo auctor, eu sodales odio pretium. Phasellus efficitur condimentum orci, sit amet volutpat justo varius eu. Donec lacinia at sapien ac elementum.3";
                break;
            case "4":
                name = "Super Mega Special Gods' food4";
                desc = "Delicious bread with hilarious onions4";
                com = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, nisi a aliquet pretium, sem lorem iaculis lorem, ut semper lorem justo quis lectus. Integer tincidunt fermentum luctus. In ut est ligula. Aliquam congue felis tortor, nec iaculis leo facilisis ut. Ut vitae mauris arcu. Aliquam feugiat dolor vitae justo auctor, eu sodales odio pretium. Phasellus efficitur condimentum orci, sit amet volutpat justo varius eu. Donec lacinia at sapien ac elementum.4";
                break;
            case "5":
                name = "";
                desc = "";
                com = "";
                break;
            case "6":
                name = "";
                desc = "";
                com = "";
                break;
            case "7":
                name = "";
                desc = "";
                com = "";
                break;
            case "8":
                name = "";
                desc = "";
                com = "";
                break;
            case "9":
                name = "";
                desc = "";
                com = "";
                break;
            case "10":
                name = "";
                desc = "";
                com = "";
                break;
            case "11":
                name = "";
                desc = "";
                com = "";
                break;
            case "12":
                name = "";
                desc = "";
                com = "";
                break;
            case "13":
                name = "";
                desc = "";
                com = "";
                break;
            case "14":
                name = "";
                desc = "";
                com = "";
                break;
            case "15":
                name = "";
                desc = "";
                com = "";
                break;
            case "16":
                name = "";
                desc = "";
                com = "";
                break;
            case "17":
                name = "";
                desc = "";
                com = "";
                break;
            case "18":
                name = "";
                desc = "";
                com = "";
                break;
            case "19":
                name = "";
                desc = "";
                com = "";
                break;
            case "20":
                name = "";
                desc = "";
                com = "";
                break;
            case "21":
                name = "";
                desc = "";
                com = "";
                break;
            case "22":
                name = "";
                desc = "";
                com = "";
                break;
            case "23":
                name = "";
                desc = "";
                com = "";
                break;
            case "24":
                name = "";
                desc = "";
                com = "";
                break;
            case "25":
                name = "";
                desc = "";
                com = "";
                break;
            case "26":
                name = "";
                desc = "";
                com = "";
                break;
            case "27":
                name = "";
                desc = "";
                com = "";
                break;
            case "28":
                name = "";
                desc = "";
                com = "";
                break;
            case "29":
                name = "";
                desc = "";
                com = "";
                break;
            case "30":
                name = "";
                desc = "";
                com = "";
                break;
            case "31":
                name = "";
                desc = "";
                com = "";
                break;
        }
        $name.html(name);
        $desc.html(desc);
        $com.html(com);
        
    });
    
});


