export const Users = {
  state: () => ({
    // Set context
    table: {
      data: [],
      page: 1,
      maxPage: 1,
      itemPerPage: 12,
    },
  
    dataForm: {},

    // Filter Object
    filters: {
      search: '',
    },

    modalUpdate: false
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

      console.log(originalResponse)

      const response = originalResponse.data.value
      if (response.success) {
        this.table.data     = response.data.users;
        this.table.maxPage  = response.data.maxPage;
      }

    },

    /**
     * Function to reload data format Customer supports
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
     * Function to create Customer supports
     *
     * 
     */
    async create() {
      this.ctx.openElLoading();

      let data = this.$state.dataForm;

      const config = {
        method: 'POST',
        url: `/api/panel/customer/support/create`,
        log: this.log,
        data: data,
      };

      const response = await request(config);

      if (response.success) {
        this.ctx.notify({
          title: 'Solicitud exitosa',
          message: response.message,
          type: 'success',
        });
        this.reloadTable();
        this.reloadDataForm();
        this.ctx.system.modal.show = false;
      } else {
        this.ctx.notify({
          title: 'Solicitud denegada',
          message: response.message,
          type: 'error',
        });
      }

      this.ctx.closeElLoading();

      return response.success;
    },

    /**
     * Function to update Customer supports
     *
     * 
     */
    async update() {
      this.ctx.openElLoading();

      let data = this.$state.dataForm;

      const config = {
        method: 'POST',
        url: `/api/panel/customer/support/update`,
        log: this.log,
        data: data,
      };

      const response = await request(config);

      if (response.success) {
        this.ctx.notify({
          title: 'Solicitud exitosa',
          message: response.message,
          type: 'success',
        });
        this.reloadTable();
        this.reloadDataForm();
        this.ctx.system.modal.show = false;
      } else {
        this.ctx.notify({
          title: 'Solicitud denegada',
          message: response.message,
          type: 'error',
        });
      }

      this.ctx.closeElLoading();

      return response.success;
    },

    /**
     * Function to delete Customer supports
     *
     * @param Integer id
     * 
     */
    async delete(uuid) {
      // this.ctx.openElLoading();

      
      // const config = {
        //   method: 'DELETE',
        //   url: `/api/panel/customer/support/delete/${id}`,
        //   log: this.log,
        // };
        
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
        // this.ctx.notify({
        //   title: 'Solicitud exitosa',
        //   message: response.message,
        //   type: 'success',
        // });
        await this.reloadTable();
        window.alert("El usuario se elimino")
        // this.ctx.system.modal.show = false;
      } else {
        window.alert("El usuario NOOOO se elimino")
        // this.ctx.notify({
        //   title: 'Solicitud denegada',
        //   message: response.message,
        //   type: 'error',
        // });
      }

      // this.ctx.closeElLoading();

      return response.success;
    },
  },

  getters: {
    getTypeUsers() {
      return this.$state.typeUsers;
    },
    getUsers() {
      return this.$state.users;
    },
    userCreatedForm() {
      return this.$state.typeUsers == usersTeam
        ? 'TeamUserCreate'
        : 'TeamUserCreate';
    },
    userEditForm() {
      return this.$state.typeUsers == usersTeam
        ? 'TeamUserUpdateRol'
        : 'TeamUserUpdateRol';
    },
    userTransferForm() {
      return this.$state.typeUsers == usersTeam
        ? 'TeamUserTransfer'
        : 'BusinessUserTransfer';
    },
  },
};
