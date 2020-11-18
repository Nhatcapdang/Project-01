import { toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';

export const toastSuccess = (text) => {
    toast.success(text, {
        transition: Slide
    })
}
export const toastInfo = (info = "Done") => {
    toast.info(info, {
        transition: Zoom
    })
}
export const toastWarn = (warn = "That's right") => {
    toast.warn(warn, {
        transition: Flip
    })
}
export const toastError = (Dark = "Dark") => {
    toast.error(`🦄 Dark`, {

        transition: Bounce
    })
}
