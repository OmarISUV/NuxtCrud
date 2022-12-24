export const Users = {
  state: () => ({
    // Set context
    table: {
      data: [],
      page: 1,
      maxPage: 1,
      itemPerPage: 200,
    },
  
    dataForm: {},

    // Filter Object
    filters: {
      search: '',
    },

    modalCreate: false,
    modalUpdate: false,
  }),

  actions: {
    /**
     * Function to reload user table
     *
     * 
     */
    async reloadTable() {
      let query = {
        pageSize: this.table.itemPerPage,
        page: this.table.page,
      }

      if(this.filters.search) query.search = this.filters.search

      // Make request
      const originalResponse = await useFetch('https://agtz6r5ple.execute-api.us-east-1.amazonaws.com/users',{
        method:'get',
        query
      })


      const response = originalResponse.data.value

      if (response.success) {
        this.table.data     = response.data.users;
        this.table.maxPage  = response.data.maxPage;
      }

    },

    /**
     * Function to reload data format User
     *
     * 
     */
    async reloadDataForm(user = null) {
      
      this.dataForm = {};
      
      if (user) {
        this.dataForm = user;
      }

    },

    /**
     * Function to create User
     *
     * 
     */
    async create() {

      let data = this.$state.dataForm;


      // Make request
      const originalResponse = await useFetch('https://agtz6r5ple.execute-api.us-east-1.amazonaws.com/users',{
        method  : 'post',
        body    : data
      })
      const response = originalResponse.data.value


      if (response.success) {
        window.alert('Solicitud exitosa')
        this.reloadTable()
        this.reloadDataForm()
        this.modalCreate = false
      } else {
        const error = response.errors[1]
        window.alert(error.msg+" in "+error.param)
      }

      return response.success;
    },

    /**
     * Function to update User
     *
     * 
     */
    async update() {

      let data = this.$state.dataForm;

      // Make request
      const originalResponse = await useFetch('https://agtz6r5ple.execute-api.us-east-1.amazonaws.com/users',{
        method  : 'put',
        body    : data
      })
      const response = originalResponse.data.value

      if (response.success) {
        window.alert('Solicitud exitosa')
        this.reloadTable()
        this.reloadDataForm()
        this.modalUpdate = false
      } else {
        const error = response.errors[1]
        window.alert(error.msg+" in "+error.param)
      }

      return response.success;
    },

    /**
     * Function to delete User
     *
     * @param Integer uuid
     * 
     */
    async delete(uuid) {
        
      const originalResponse = await useFetch(
        'https://agtz6r5ple.execute-api.us-east-1.amazonaws.com/users',
        {
          method:'delete',
          body:{
            uuid:uuid
          }
        },
      )
      const response = originalResponse.data.value

      if (response.success) {
        await this.reloadTable();
        window.alert("El usuario se elimino")
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
