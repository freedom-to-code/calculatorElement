/**
 * Created by Administrator on 2016/2/1 0001.
 */
var Dropslt = {
    sltChoose: function (e) {
        var target = e.target;
        var targetNode = target.nodeName;
        var nodeA;
        if (targetNode == 'A') {
            nodeA = $(target);
        } else {
            nodeA = $(target).find('a');
        }
        if (!nodeA[0]) {
            return;
        }
        var nodeVal = nodeA.attr('value');
        var ipt = nodeA.parents('.dropdown').siblings('.inner-tip-ipt-content');
        ipt.html(nodeVal);
    },
    sltChooseForPar: function (e) {
        var target = e.target;
        var $target = $(target);
        if ($target.hasClass('dropdown') || $target.parents('.dropdown')[0]) {
            return;
        }
        $(this).find('.dropdown').addClass('open');
        e.stopPropagation();
        //$(this).find('.ipt-caret').trigger("click.bs.dropdown");
    }
};