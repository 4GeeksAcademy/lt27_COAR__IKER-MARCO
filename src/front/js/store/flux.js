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

      
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
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
        fetch(
          "https://effective-acorn-wr7p5qrgrpqrfvgjg-3001.app.github.dev/api/craftmen"
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ craftmen: data });
            console.log("Craftmen: ");
            console.log(store.craftmen);
          })
          .catch((error) => console.error(error));
        fetch(
          "https://effective-acorn-wr7p5qrgrpqrfvgjg-3001.app.github.dev/api/product"
        )
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
          `https://effective-acorn-wr7p5qrgrpqrfvgjg-3001.app.github.dev/api/craftmen/${id}`,
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
          `https://effective-acorn-wr7p5qrgrpqrfvgjg-3001.app.github.dev/api/product/${id}`,
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
          `https://effective-acorn-wr7p5qrgrpqrfvgjg-3001.app.github.dev/api/craftmen/${store.craftmenselected.id}`,
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
          `https://effective-acorn-wr7p5qrgrpqrfvgjg-3001.app.github.dev/api/product/${store.productselected.id}`,
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
          `https://effective-acorn-wr7p5qrgrpqrfvgjg-3001.app.github.dev/api/craftmen/${store.craftmenselected.id}`,
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
          `https://effective-acorn-wr7p5qrgrpqrfvgjg-3001.app.github.dev/api/product/${store.productselected.id}`,
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

        fetch(
          "https://effective-acorn-wr7p5qrgrpqrfvgjg-3001.app.github.dev/api/craftmen/",
          requestOptions
        )
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

        fetch(
          "https://effective-acorn-wr7p5qrgrpqrfvgjg-3001.app.github.dev/api/product/",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            getActions().loadSomeData();
          })
          .catch((error) => console.error(error));
      },
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

          fetch(
            "https://effective-acorn-wr7p5qrgrpqrfvgjg-3001.app.github.dev/api/login",
            requestOptions
          )
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
    },
  };
};

export default getState;
