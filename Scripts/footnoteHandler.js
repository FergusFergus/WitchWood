var footnote = document.getElementById('footnotes');
var startPosTop = $(footnote).offset().top;
$(footnote).hide();

footnoteVisible = false; // used like a lock
fading = false; // used like a lock

function generateFootnote(num, id) {
    text = footnotes[id]

    num = id.slice(8)

    var footnote = "<div class = \"noteText\">";
    footnote += "<footnoteText> <sup>" + num + "</sup> " + text + "</footnoteText>";
    footnote += "</div>"

    return footnote;
}

// Detects when the mouse is hovered over a footnote, fades footnotes
// in and out as appropriate.
$( ".hover" ).hover(
    function() { // fade in on hover
        id = $(this).attr('id');

        if (!footnoteVisible) {
            var targetPos = $(this).offset().top;

            var text = generateFootnote(1, id)
            $(footnote).append(text)

            $(footnote).offset({
                left: 0,
                top: targetPos - startPosTop
            });

            footnoteVisible = true;
            $(footnote).fadeIn( "300" );
        }
    }, function() { // fade out when mouse leaves
        if (footnoteVisible) {
            var targetPos = $(this).offset().top;

            if (!fading) {
                fading = true;

                $( footnote ).fadeOut( 300, function() {
                    footnoteVisible = false;
                    $(footnote).empty();
                    $(footnote).offset({
                        left: 0,
                        top: startPosTop - targetPos
                    });
                    fading = false;
                });
            }
        }
    }
);
