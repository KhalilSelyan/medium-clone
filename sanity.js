import { createCurrentUserHook, createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
}

// Create a client instance ot fetch data
export const sanityClient = createClient(config)

// Create a urlfor builder to generate urls to images
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Create a hook to get the current user
export const useCurrentUser = createCurrentUserHook(config)
