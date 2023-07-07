<!-- components/ConfirmDialogue.vue -->

<template>
    <popup-modal ref="popup">
        <div class="btns">
            <h2 style="margin-top: 0">{{ title }}</h2>
            <button type="button" class="btn close" data-dismiss="modal" aria-label="Close"
            @click="_cancel">
            <span aria-hidden="true" class="size">&times;</span>
            </button>
        </div>
        <hr>
        <div class="btns bt-5">
            <p>{{ message }}</p>
        </div>   
        <hr>
        <br>
        <div class="btns">
            <button class="btn btn-secondary col-4" @click="_cancel">{{ cancelButton }}</button>
            <button class="btn btn-danger col-4 " @click="_confirm">{{ okButton }}</button>
        </div>           
       
    </popup-modal>
</template>


<script>
import PopupModal from '../modal/PopupModal.vue'

export default {
    name: 'ConfirmDialogue',

    components: { PopupModal },

    data: () => ({
        // Parameters that change depending on the type of dialogue
        title: undefined,
        message: undefined, // Main text content
        okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
        cancelButton: 'Cancel', // text for cancel button
        
        // Private variables
        resolvePromise: undefined,
        rejectPromise: undefined,
    }),

    methods: {
        show(opts = {}) {
            this.title = opts.title
            this.message = opts.message
            this.okButton = opts.okButton
            if (opts.cancelButton) {
                this.cancelButton = opts.cancelButton
            }
            // Once we set our config, we tell the popup modal to open
            this.$refs.popup.open()
            // Return promise so the caller can get results
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        _confirm() {
            this.$refs.popup.close()
            this.resolvePromise(true)
        },

        _cancel() {
            this.$refs.popup.close()
            this.resolvePromise(false)
            // Or you can throw an error
            // this.rejectPromise(new Error('User canceled the dialogue'))
        },
    },
}
</script>

<!-- components/ConfirmDialogue.vue -->

<style scoped>
.btns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.close {
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding: 0;
    font-size: 30px;
}

</style>