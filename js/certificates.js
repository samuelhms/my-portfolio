let certificates_url = [];
//arr.push({ id: i, item: `certificate${i}` });
certificates_url.push({ url: `images/portfolio/dio/113C61E0-fundamentos.jpg`, stack: `all backend frontend ` });
certificates_url.push({ url: `images/portfolio/dio/1A1CCB34-fundamentos.jpg`, stack: `all backend frontend ` });
certificates_url.push({ url: `images/portfolio/dio/1B47D772-bootcamp.jpg`, stack: `all bootcamp frontend ` });
certificates_url.push({ url: `images/portfolio/dio/2C48A3AE-front.jpg`, stack: `all   frontend ` });
certificates_url.push({ url: `images/portfolio/dio/7F75B218-back.jpg`, stack: `all   backend  ` });
certificates_url.push({ url: `images/portfolio/dio/28ABB1DD-front.jpg`, stack: `all frontend ` });
certificates_url.push({ url: `images/portfolio/dio/F79269AD-fundamentos.jpg`, stack: `all backend frontend ` });
certificates_url.push({ url: `images/portfolio/dio/177A570D-git.jpg`, stack: `all github ` });
certificates_url.push({ url: `images/portfolio/dio/218D4CFB-git.jpg`, stack: `all github` });
certificates_url.push({ url: `images/portfolio/dio/25584C7F-front.jpg`, stack: `all  frontend ` });
certificates_url.push({ url: `images/portfolio/dio/97340518-front.jpg`, stack: `all  frontend ` });
certificates_url.push({ url: `images/portfolio/dio/E39573FA-front.jpg`, stack: `all  frontend ` });
certificates_url.push({ url: `images/portfolio/dio/E920683F-front.jpg`, stack: `all  frontend ` });
certificates_url.push({ url: `images/portfolio/dio/F26B2CB5-fundamentos.jpg`, stack: `all backend frontend ` });
certificates_url.push({ url: `images/portfolio/dio/F27D9947-back.jpg`, stack: `all backend  ` });
certificates_url.push({ url: `images/portfolio/google/fundamentalsI.jpg`, stack: `all  frontend ` });
certificates_url.push({ url: `images/portfolio/google/fundamentalsII.jpg`, stack: `all  frontend ` });
certificates_url.push({ url: `images/portfolio/google/introainterview.jpg`, stack: `all  frontend ` });
certificates_url.push({ url: `images/portfolio/outros/21443-95211sap.jpg`, stack: `all others` });
certificates_url.push({ url: `images/portfolio/outros/28277_124743pdi.jpg`, stack: `all  others` });


function sortearCertificates() {
    let num_certificates = certificates_url.length;
    //gerar um Array com num_certificates
    const arr = [];

    for (let i = 0; i < num_certificates; i++) {
        arr.push({ id: i, item: `certificate${i}` });
    }
    //Código para ordenar o Array de forma aletória
    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        document.querySelector("#certificate").insertAdjacentHTML("afterend", '<div id="certificate' + i + '"></div>');
    }

    console.log(arr);

    innerCertificates(arr)
}

function innerCertificates(arr_list) {





    console.log(certificates_url[0].url)


    for (let index = 0; index < arr_list.length; index++) {
        console.log("#" + arr_list[0].item)


        //insertAdjacentHTML("afterbegin", "<span style='color:red'>My span</span>");


        let html_inner = ''
        html_inner += ' <div class="col-lg-4 col-md-6 portfolio-thumbnail ' + certificates_url[index].stack + '">'
        html_inner += ' <a class="popup-img" href="' + certificates_url[index].url + '">  '
        html_inner += ' <img src="' + certificates_url[index].url + '" alt="img"> '
        html_inner += ' </a>'
        html_inner += ' </div>'

        console.log(html_inner)
        try {
            document.querySelector("#" + arr_list[index].item).innerHTML = html_inner;

        } catch (error) { }

    }



}
sortearCertificates()