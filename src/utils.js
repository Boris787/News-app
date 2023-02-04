import imageUrlBuilder from '@sanity/image-url'
import sanity from './client'
const builder = imageUrlBuilder(sanity)

export const CreateUrl = (source, width = 300, height = 300) => {
    return builder.image(source).width(width).height(height).url()
}

export const FormatDate = (date) => {
    return new Date(date).toLocaleDateString()
}