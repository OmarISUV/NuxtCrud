export const BubbleSort = {
  state: () => ({
  }),

  actions: {
   
      /**
       * Function to Bubble Sort
       *
       * 
       */
      async bubbleSort(bubbleSort) {
      
        // Make request
        const originalResponse = await useFetch('https://agtz6r5ple.execute-api.us-east-1.amazonaws.com/bubble',{
          method  : 'post',
          body    : {arrayNumber:bubbleSort}
        })
        const response = originalResponse.data.value


        if (response.success) {
          window.alert(response.data.result)
        } else {
          const error = response.errors[1]
          window.alert(error.msg+" in "+error.param)
        }

        return response.success;
      },
  },

  getters: {
   
  },
};
