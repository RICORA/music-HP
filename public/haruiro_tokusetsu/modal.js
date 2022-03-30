$(function(){

    // �u.modal-open�v���N���b�N
    $('.modal-open').click(function(){
        // �I�[�o�[���C�p�̗v�f��ǉ�
        $('body').append('<div class="modal-overlay"></div>');
        // �I�[�o�[���C���t�F�[�h�C��
        $('.modal-overlay').fadeIn('slow');
 
        // ���[�_���R���e���c��ID���擾
        var modal = '#' + $(this).attr('data-target');
        // ���[�_���R���e���c�̕\���ʒu��ݒ�
        modalResize();
         // ���[�_���R���e���c�t�F�[�h�C��
        $(modal).fadeIn('slow');
 
        // �u.modal-overlay�v���邢�́u.modal-close�v���N���b�N
        $('.modal-overlay, .modal-close').off().click(function(){
            // ���[�_���R���e���c�ƃI�[�o�[���C���t�F�[�h�A�E�g
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // �I�[�o�[���C���폜
                $('.modal-overlay').remove();
            });
        });
 
        // ���T�C�Y������\���ʒu���Ď擾
        $(window).on('resize', function(){
            modalResize();
        });
 
        // ���[�_���R���e���c�̕\���ʒu��ݒ肷��֐�
        function modalResize(){
            // �E�B���h�E�̉����A�������擾
            var w = $(window).width();
            var h = $(window).height();
 
            // ���[�_���R���e���c�̕\���ʒu���擾
            var x = (w - $(modal).outerWidth(true)) / 2;
            var y = (h - $(modal).outerHeight(true)) / 2;
 
            // ���[�_���R���e���c�̕\���ʒu��ݒ�
            $(modal).css({'left': x + 'px','top': y + 'px'});
        }
 
    });
});