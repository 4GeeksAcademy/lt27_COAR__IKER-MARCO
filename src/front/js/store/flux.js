const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      craftmen: [],
      craftmenselected: {},
      product: [],
      productselected: [],
      authorize: false,
      user: {},

      allCategory: [],
      allAdmins: [],
      allBuyers: [],
      allOrders: [],
      oneOrder:[],
      Pago:0,
      cart:[],
      currentBuyerId:null,
      auth: false,

      authorize_b: false,
      authorize_a: false,

      productsLiked: [],
      signup_b: [],

    },
    actions: {
      deleteFromCart: (itemName) => {
        const store = getStore();
        setStore({
            cart: store.cart.filter(item => item.name !== itemName)
        });
      },
      Total: (total) => {
        const store = getStore()
        console.log(total)
        setStore({Pago: total})
        console.log(store.Pago)
      },
      setCurrentBuyer: (buyerId) => {
        setStore({currentBuyerId: buyerId})
      },
      addNewAddress: (newAddress) => {
        const store = getStore() 
        setStore({
          allBuyers: store.allBuyers.map(buyer =>
            buyer.id === store.currentBuyerId 
              ? {...buyer, addresses: [...buyer.addresses, newAddress] }
              : buyer
          )
        })
      },
      deleteFromCart: (itemName) => {
        const store = getStore()
        const updateCart = store.cart.filter(item => item.name !== itemName)
        setStore({cart:updateCart})
      },
      addToCart: (product) => {
        const store = getStore()
        if (typeof product === 'string') {
          product = JSON.parse(product);
        }
        console.log('Adding product to cart:', product)
        setStore({ cart: [...store.cart, product] })
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      authFalse: () => {
        setStore({ auth: false });
      },
      Order: () => {
        try {
          fetch(process.env.BACKEND_URL + "/api/orders")
            .then((resp) => {
              if (!resp.ok) {
                throw new Error("The application was unsuccessful");
              }
              return resp.json();
            })
            .then((data) => {
              setStore({ allOrders: data });
            });
        } catch {
          console.error("Something wrong", error);
        }
      },
      OneOrder: (id) => {
        try {
          fetch(process.env.BACKEND_URL + "/api/orders/" + id)
            .then((resp) => {
              if (!resp.ok) {
                throw new Error("The application was unsuccessful");
              }
              return resp.json();
            })
            .then((data) => {
              console.log(data)
              setStore({ oneOrder: data });
            });
        } 
        catch {
          console.error("Something wrong", error);
        }
      },
      BUYER: () => {
        try {
          fetch(process.env.BACKEND_URL + "/api/buyer")
            .then((resp) => {
              if (!resp.ok) {
                throw new Error("The application was unsuccessful");
              }
              return resp.json();
            })
            .then((data) => {
              setStore({ allBuyers: data });
            });
        } catch {
          console.error("Something wrong", error);
        }
      },
      newBuyer: async (NewBuyer) => {
        const store = getStore();
        const actions = getActions();

        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/buyer/new",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(NewBuyer),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to create buyer");
          }

          const data = await response.json();

          setStore({
            allBuyers: [...store.allBuyers, data],
          });
          actions.BUYER();
        } catch (error) {
          console.error("Error creating buyer", error);
        }
      },
      updateBuyer: async (updateBuyer, id) =>{
        const actions = getActions();
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/buyer/update/" + id , {
            method:"PUT",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateBuyer),
          })

          if(!response.ok) {
            throw new Error("Failed to update buyer")
          }

          const data = await response.json();

          setStore({
            allBuyers: getStore().allBuyers.map(b => (b.id === id ? data: b))
          })
          actions.BUYER()
        }catch(error) {
          console.error("error updating buyer", error)
        }
      },
      deleteBuyer: async (id) => {
        try {
          const actions = getActions();
          const response = await fetch(
            process.env.BACKEND_URL + "/api/buyer/delete/" + id,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            throw new Error("Error delete1 buyer");
          }
          actions.BUYER();
        } catch (error) {
          console.error("Error delete buyer:", error);
        }
      },
      Admins: () => {
        try {
          fetch(process.env.BACKEND_URL + "/api/admin")
            .then((resp) => {
              if (!resp.ok) {
                throw new Error("The application was unsuccessful");
              }
              return resp.json();
            })
            .then((data) => {
              setStore({ allAdmins: data });
            });
        } catch {
          console.error("Something wrong", error);
        }
      },
      newAdmin: async (newAdmin) => {
        const store = getStore();
        const actions = getActions();

        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/admin/new",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newAdmin),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to create admin");
          }

          const data = await response.json();

          setStore({
            allAdmins: [...store.allAdmins, data],
          });
          actions.Admins();
        } catch (error) {
          console.error("Error creating admin", error);
        }
      },
      updateAdmin: async (updatedAdmin, id) => {
        const store = getStore();
        const actions = getActions();
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/admin/update/" + id,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedAdmin),
            }
          );

          if (!response.ok) {
            throw new Error("Error adding category");
          }

          const data = await response.json();

          const updatedAdminIndex = store.allAdmins.findIndex(
            (admin) => admin.id === id
          );
          const updatedAdmins = [...store.allAdmins];
          updatedAdmins[updatedAdminIndex] = {
            ...updatedAdmins[updatedAdminIndex],
            ...updatedAdmin,
          };

          setStore({
            allAdmins: updatedAdmins,
          });
          actions.Admins();
        } catch (error) {
          console.error("Error adding category:", error);
        }
      },
      deleteAdmin: async (id) => {
        try {
          const actions = getActions();
          const response = await fetch(
            process.env.BACKEND_URL + "/api/admin/delete/" + id,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            throw new Error("Error adding category");
          }
          actions.Admins();
        } catch (error) {
          console.error("Error adding category:", error);
        }
      },
      categorys: () => {
        try {
          fetch(process.env.BACKEND_URL + "/api/category")
            .then((resp) => {
              if (!resp.ok) {
                throw new Error("The application was unsuccessful");
              }
              return resp.json();
            })
            .then((data) => {
              setStore({ allCategory: data });
            });
        } catch {
          console.error("Something wrong", error);
        }
      },
      addCategory: async (inputChange) => {
        try {
          const actions = getActions();
          const response = await fetch(
            process.env.BACKEND_URL + "/api/category/new",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: inputChange }),
            }
          );
          if (!response.ok) {
            throw new Error("Error adding category");
          }
          actions.categorys();
          setStore({ auth: true });
        } catch (error) {
          console.error("Errod adding category:", error);
        }
      },
      editCategory: async (inputChange, id) => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/category/update/" + id,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name: inputChange }),
            }
          );
          if (!response.ok) {
            throw new Error("Error adding category");
          }
          const actions = getActions();
          actions.categorys();
        } catch (error) {
          console.error("Error adding category:", error);
        }
      },
      deleteCategory: async (id) => {
        try {
          const actions = getActions();
          const response = await fetch(
            process.env.BACKEND_URL + "/api/category/delete/" + id,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            throw new Error("Error adding category");
          }
          actions.categorys();
        } catch (error) {
          console.error("Error adding category:", error);
        }
      },
      selectcraftmen: (currentCraftman) => {
        const store = getStore();
        console.log("seleccionado", currentCraftman);
        setStore({ craftmenselected: currentCraftman });
        console.log(store.craftmenselected);
      },
      selectproduct: (currentProduct) => {
        const store = getStore();
        console.log("seleccionado", currentProduct);
        setStore({ productselected: currentProduct });
        console.log(store.productselected);
      },

      getMessage: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        const store = getStore();

        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        setStore({ demo: demo });
      },

      loadSomeData: () => {
        const store = getStore();
        fetch(process.env.BACKEND_URL + "/api/craftmen")
          .then((response) => response.json())
          .then((data) => {
            setStore({ craftmen: data });
            console.log("Craftmen: ");
            console.log(store.craftmen);
          })
          .catch((error) => console.error(error));
        fetch(process.env.BACKEND_URL + "/api/product")
          .then((response) => response.json())
          .then((data) => {
            setStore({ product: data });
            console.log("Products: ");
            console.log(store.product);
          })
          .catch((error) => console.error(error));
      },

      getcraftman: (id) => {
        const store = getStore();

        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(
          process.env.BACKEND_URL + "/api/craftmen/" + `${id}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log("Get by id de craftman: ", result);
            setStore({ craftmenselected: result });
          })
          .catch((error) => console.error(error));
      },

      getproduct: (id) => {
        const store = getStore();

        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(
          process.env.BACKEND_URL + "/api/product/" + `${id}`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log("Get by id de products: ", result);
            setStore({ productselected: result });
          })
          .catch((error) => console.error(error));
      },

      puteditcraftman: (craftmenselected) => {
        const store = getStore();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
          "Cookie",
          ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxOvCUAx3aWs4VeBfGMb_QhxvJh4QzBKWJh-ut0Fkg-EmN5NY6UbJ3L1PVChvhlUFXRCNohecFuPmFkL197LQSKNUvtNdN4TXyP2Gn2gGHrKcN-v-H9Cz9zfmgvyJ1sDNfclWRRhQStYj8nhq-TgipmSkt8QoffrOQfFJVCpjNSc1gYx6a_I3TIvnl8ynDSZJ02AZx5ee29nlclwVwG3A_i6YrohOQ1XxNWW5_ykgyx1D6SwQ3BZ-l-6KWX-eLyAFQ7XvWIptZHE18sRATx6gYMKrVfXzFr_gaFh2mwvC34iRTp_YF0PLS8D-F0lcL4Hx0Mc9ZVkaf_cI-amP-zAYob1-s5PrwctSL-Q2LLcY_f_oEgGj3AK3-ys13XVwS_hUJ44novvb-4QQdltKy2nqPnQjpxVwSOAhPtg68w6bAIpR9Roei9bUNlqh1wcan_V3andVDXoFljzetRhQtjmfPZ5Nffh0bavOKACq1uK9J9OaBkXHG4XXTGNISARJdZ5QxBxe4k-N-2B1TWY1LfZaJe1o1ST-rndqH3aLaab4_s1Iq84MJ9VtFFs5JZs_mfXVNUoyT7K_Si2rA8QyQ0AqAiCI4LaVFbawKi6V1YE68okbN-MVy68DPyfrjPVeeFt9PXmJw0lp8b4lVmOyZaHRyGLtVHdMUFCa1NQpZYflPSo4QG7pE6cYp-b4YUQVbLsG7ygpLIZS64WzoODRTwz-TNyWsEtdorVGN-DGTQJjJD0ozsFMwQm74FjfQRErv0ci7ne49ieStkEjtnEPeJeC9ieJsamwn4mqR2Y7i_xC4h6rXDEXHh7v-zyC5ACt8-6YcEmAYB4wD80wgJFJXvjj6tyOVP9ASuOonByNOdlPrTcGF-GuinZz2pWLbwikazxJTaFo0aulTxbk4EiPUCCGsD4CejeaNDTIeaukWetjeeTaKM_2gmsJR1XHxUjitB85IKIIEGKJa68a5bY68f9xq6L"
        );

        const raw = JSON.stringify({
          address: store.craftmenselected.address,
          city: store.craftmenselected.city,
          email: store.craftmenselected.email,
          id: store.craftmenselected.id,
          is_active: true,
          last_name: store.craftmenselected.last_name,
          name: store.craftmenselected.name,
          password: store.craftmenselected.password,
          phone: store.craftmenselected.phone,
          state: store.craftmenselected.state,
          zip_code: store.craftmenselected.zip_code,
        });

        const requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          process.env.BACKEND_URL +
            "/api/product/" +
            `${store.craftmenselected.id}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
      },

      puteditproduct: (productselected) => {
        const store = getStore();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
          "Cookie",
          ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxOvCUAx3aWs4VeBfGMb_QhxvJh4QzBKWJh-ut0Fkg-EmN5NY6UbJ3L1PVChvhlUFXRCNohecFuPmFkL197LQSKNUvtNdN4TXyP2Gn2gGHrKcN-v-H9Cz9zfmgvyJ1sDNfclWRRhQStYj8nhq-TgipmSkt8QoffrOQfFJVCpjNSc1gYx6a_I3TIvnl8ynDSZJ02AZx5ee29nlclwVwG3A_i6YrohOQ1XxNWW5_ykgyx1D6SwQ3BZ-l-6KWX-eLyAFQ7XvWIptZHE18sRATx6gYMKrVfXzFr_gaFh2mwvC34iRTp_YF0PLS8D-F0lcL4Hx0Mc9ZVkaf_cI-amP-zAYob1-s5PrwctSL-Q2LLcY_f_oEgGj3AK3-ys13XVwS_hUJ44novvb-4QQdltKy2nqPnQjpxVwSOAhPtg68w6bAIpR9Roei9bUNlqh1wcan_V3andVDXoFljzetRhQtjmfPZ5Nffh0bavOKACq1uK9J9OaBkXHG4XXTGNISARJdZ5QxBxe4k-N-2B1TWY1LfZaJe1o1ST-rndqH3aLaab4_s1Iq84MJ9VtFFs5JZs_mfXVNUoyT7K_Si2rA8QyQ0AqAiCI4LaVFbawKi6V1YE68okbN-MVy68DPyfrjPVeeFt9PXmJw0lp8b4lVmOyZaHRyGLtVHdMUFCa1NQpZYflPSo4QG7pE6cYp-b4YUQVbLsG7ygpLIZS64WzoODRTwz-TNyWsEtdorVGN-DGTQJjJD0ozsFMwQm74FjfQRErv0ci7ne49ieStkEjtnEPeJeC9ieJsamwn4mqR2Y7i_xC4h6rXDEXHh7v-zyC5ACt8-6YcEmAYB4wD80wgJFJXvjj6tyOVP9ASuOonByNOdlPrTcGF-GuinZz2pWLbwikazxJTaFo0aulTxbk4EiPUCCGsD4CejeaNDTIeaukWetjeeTaKM_2gmsJR1XHxUjitB85IKIIEGKJa68a5bY68f9xq6L"
        );

        const raw = JSON.stringify({
          category: store.productselected.category,
          category_id: store.productselected.category_id,
          description: store.productselected.description,
          id: store.productselected.id,
          image: store.productselected.image,
          name: store.productselected.name,
          price: store.productselected.price,
          stock: store.productselected.stock,
        });

        const requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          process.env.BACKEND_URL +
            "/api/product/" +
            `${store.productselected.id}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
      },

      deletecraftman: () => {
        const store = getStore();

        const requestOptions = {
          method: "DELETE",
          redirect: "follow",
        };

        fetch(
          process.env.BACKEND_URL +
            "/api/craftmen/" +
            `${store.craftmenselected.id}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            getActions().loadSomeData();
          })
          .catch((error) => console.error(error));
      },
      deleteproduct: () => {
        const store = getStore();

        const requestOptions = {
          method: "DELETE",
          redirect: "follow",
        };

        fetch(
          process.env.BACKEND_URL +
            "/api/product/" +
            `${store.productselected.id}`,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            getActions().loadSomeData();
          })
          .catch((error) => console.error(error));
      },

      postcratfman: (data) => {
        const raw = JSON.stringify(data);

        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/api/craftmen/", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            getActions().loadSomeData();
          })
          .catch((error) => console.error(error));
      },
      postproduct: (data) => {
        const raw = JSON.stringify(data);

        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/api/product/", requestOptions)
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            getActions().loadSomeData();
          })
          .catch((error) => console.error(error));
      },
      ////////////////////////////  LOGINS  ////////////////////////////

      login: (email, password) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
          "Cookie",
          ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxPaq2YA5Wc6Ce7dTIIcnPdgBMn8T9O_hXjuhiRtmmcxWwKPPX7jm4DAFjLwfCkPjgldDNs2RTdLeSsTNji0IIR0Spd9-RHtic_VWgTSU0UxRELK0fV5bHMqaUjjZ_uYrvmCEhzv6AUW_jDHeG9MXWfeCt0owx7oXbslCy0PB5-dz2yTuYmac8Yax2p7lRIreyi4iNva-pO4uUBwX5tYOTBRb1a7tfLn2YzbXTdkhNW90Mf0jOEZnjS80hbOzqa5AuzlvgLE2e5sQD3NIt7TzpXqzxLouZ_qTMENV6K6zcGIo477jkzuelhkkPGYBG2FxKGklVtu2FmQDCosfYyx8RYovlpD0cuIQEBo9XERP-Glk__ItW8PEcz2-WzjUMgYPJY0Ja_y4WUILlDqduphXYCfG6CiSFlSVDasEph7oqRS_t_PDf5-ZBJjmXJm9-NO9j26NYCFOKWDaoKLvYlWGL6AKSSiK8DGxVe2hMpdofzWsWXlioLBcIUoNZw1ZJ0bQj3Fs84yFq_KL87hs_XpA395G3l-EHYavImD5uGD7lDbAxjNIna29bQegfyfFB0Ea3T2BlJsMgMmYXWntiO9rw-4jziz4J3TcL8soXovSWYkyct9kAFScZ_EbkfiEEgBILfuDWwRIzigX4wyPakbRUmEyxNyl0zvPXJLKQTGVK_V769Vsrcz-IuxlOPdMCqEmmx3bQhRMUk2JZ4pYMMwUOiG0wqqO6T0-Rgsv2KsMGeBS_2_Qd-f5xnWFFdst4hssHgTBThSqEbaq5Kf3I8oct2nLQizPPxC0i6OT-qEoPbr3DhcQKKxMJzl38D10NeLDhVDsTWjchCBfvIhiWTgTJZmBbgX_QxHYQV_c899cogZrn8xVzTlwApXQWrHElEBZcsastc2CgPfMPPHBl5dP6TjnwAMsGkQBEIzMnNGMsyFPR0GXcL4lbccqsfKCTNgjJlndVda2oTneulo1fqeMitI"
        );

        const raw = JSON.stringify({
          username: email,
          password: password,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              setStore({ authorize: true });
            }
            return response.json(); // Devuelve el valor para que pueda ser utilizado en la siguiente función .then
          })
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.access_token);
          });
      },
      logout: () => {
        console.log("logout desde flux");
        localStorage.removeItem("token");
        setStore({ authorize: false });
      },
      login_b: (email_b, password_b) => {
        console.log("desde flux " + email_b, password_b);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
          "Cookie",
          ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxO7gSl767VvlaCAxpULtGdwOTsHY-rQ8V30c0Q4BkTKsDssR2hUq2HqJrFwdKttz6MKMXxvIjsn2zQ0gJ2RSxlP_WNhmapzQGsL05_xDPjNzu_XVNj9xyB-wrYZsT36nb76Z-8aw6GhTyfha0Bva-dBS2aEnQtif98hRsxqacVq3TTm0YotdVK0K-upXtAsy3jOVxKeAC1ZPgDw6HtYvMV1JUlCniZsxpyiPnTP9HtV8Lqv4ubwL1ZJDRItKVQ1aFde44Sjel-BpGGGYYhdtCEgrtcW-uu4grmhCkOdWkKJzaQnevVlO4KSHbhE1l0EEG_CiRMm7KxFSBIspqpe-742Nit6Vuv935Pbea7x3N3URJd94I_YIxRIlpkm02_qBe5u4LGkyK5mpfJn34M_v5yNV8C4h76uQFC0_jSXfXeXIclg0jC95lxvuYkNp-WtGBu2oav7_ZA6yqL768dtVTJOJq9D7IbMSNqwSDLPU7lVvQdpMnQpMydqOL6xEk8bvMc26pfepTDgcO5nDkDg2senfp7wlUT_SqAxv_FHDFalpArdgxKfvF_b3IHCcD-F4T2SnKEPThXRRi_96GqDlHf34YcPc4krxJrL67Z4ZQKHv6Ad-yk-DX88XhgKMm924iIu9T6G9m52ngava8shjlDwK_AyFTHxj7zE99AmqlsTSu-xDFC_9o05r7Ny_pX9ruhhurt6RE38YmZsqZZReHBg61PTDEC_ojlUZ_0SvT-uYlCmEfsCPZyehYgk3rAzDqAGWWSIabcU04kz3L0duK0erZtzWTATN6YCAJVjG3E4_vZfzOGTp8AXY4rS_RIEjo6ycLASox-y0EHG9hOwvUP-2nv1dELMxPUyLjLZwsUQZNjSgAcjW4zWBpgWzkmd2Okv5GjJUmnwflVOfkQsbQmE1IjoQTI-MzL_2al5U6ILUngqrGY-pWzQGzBYE_Yh2gu_quaYuJJSFShnVXj7hIw9"
        );

        const raw = JSON.stringify({
          username: email_b,
          password: password_b,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/api/login_b", requestOptions)
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              return response.json();
            }
            throw new Error ("Failed to authenticate")
          })
          .then((datab) => {
            console.log(datab);
            localStorage.setItem("token2", datab.access_token);
            setStore({ authorize_b: true, currentBuyerId: datab.buyer_id})
          });
      },
      logout_b: () => {
        console.log("logout desde flux");
        localStorage.removeItem("token");
        setStore({ authorize_b: false });
      },
      login_a: (email_a, password_a) => {
        console.log("desde flux " + email_a, password_a);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
          "Cookie",
          ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxO7gSl767VvlaCAxpULtGdwOTsHY-rQ8V30c0Q4BkTKsDssR2hUq2HqJrFwdKttz6MKMXxvIjsn2zQ0gJ2RSxlP_WNhmapzQGsL05_xDPjNzu_XVNj9xyB-wrYZsT36nb76Z-8aw6GhTyfha0Bva-dBS2aEnQtif98hRsxqacVq3TTm0YotdVK0K-upXtAsy3jOVxKeAC1ZPgDw6HtYvMV1JUlCniZsxpyiPnTP9HtV8Lqv4ubwL1ZJDRItKVQ1aFde44Sjel-BpGGGYYhdtCEgrtcW-uu4grmhCkOdWkKJzaQnevVlO4KSHbhE1l0EEG_CiRMm7KxFSBIspqpe-742Nit6Vuv935Pbea7x3N3URJd94I_YIxRIlpkm02_qBe5u4LGkyK5mpfJn34M_v5yNV8C4h76uQFC0_jSXfXeXIclg0jC95lxvuYkNp-WtGBu2oav7_ZA6yqL768dtVTJOJq9D7IbMSNqwSDLPU7lVvQdpMnQpMydqOL6xEk8bvMc26pfepTDgcO5nDkDg2senfp7wlUT_SqAxv_FHDFalpArdgxKfvF_b3IHCcD-F4T2SnKEPThXRRi_96GqDlHf34YcPc4krxJrL67Z4ZQKHv6Ad-yk-DX88XhgKMm924iIu9T6G9m52ngava8shjlDwK_AyFTHxj7zE99AmqlsTSu-xDFC_9o05r7Ny_pX9ruhhurt6RE38YmZsqZZReHBg61PTDEC_ojlUZ_0SvT-uYlCmEfsCPZyehYgk3rAzDqAGWWSIabcU04kz3L0duK0erZtzWTATN6YCAJVjG3E4_vZfzOGTp8AXY4rS_RIEjo6ycLASox-y0EHG9hOwvUP-2nv1dELMxPUyLjLZwsUQZNjSgAcjW4zWBpgWzkmd2Okv5GjJUmnwflVOfkQsbQmE1IjoQTI-MzL_2al5U6ILUngqrGY-pWzQGzBYE_Yh2gu_quaYuJJSFShnVXj7hIw9"
        );

        const raw = JSON.stringify({
          username: email_a,
          password: password_a,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/api/login_a", requestOptions)
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              setStore({ authorize_a: true });
            }
            return response.json(); // Devuelve el valor para que pueda ser utilizado en la siguiente función .then
          })
          .then((datab) => {
            console.log(datab);
            localStorage.setItem("token3", datab.access_token);
          });
      },
      logout_a: () => {
        console.log("logout desde flux");
        localStorage.removeItem("token");
        setStore({ authorize_a: false });
      },
      ////////////////////////////  ADD FAVORITES  ////////////////////////////

      favoriteLiked: (productsName) => {
        console.log(productsName);
        const store = getStore();

        if (store.productsLiked.includes(productsName)) {
          setStore({
            productsLiked: store.productsLiked.filter(
              (elemento) => elemento != productsName
            ),
          });
        } else
          setStore({
            productsLiked: [...store.productsLiked, productsName],
          });
      },

      ////////////////////////////  DELETE FAVORITES  ////////////////////////////

      deleteFavorite: (productsName) => {
        const store = getStore();

        setStore({
          productsLiked: store.productsLiked.filter(
            (elemento) => elemento != productsName
          ),
        });
      },

      ////////////////////////////  SIGN-UP  ////////////////////////////
      signup_b: (email, password) => {
        
      },
    },
  };
};

export default getState;
