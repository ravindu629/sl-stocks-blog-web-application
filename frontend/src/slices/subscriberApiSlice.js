import { apiSlice } from "./apiSlice";
import { SUBSCRIBERS_URL } from "../constants";

export const subscriberApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerSubscriber: builder.mutation({
      query: (data) => ({
        url: `${SUBSCRIBERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    getSubscribers: builder.query({
      query: () => ({
        url: SUBSCRIBERS_URL,
      }),
      providesTags: ["Subscriber"],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useRegisterSubscriberMutation, useGetSubscribersQuery } =
  subscriberApiSlice;
