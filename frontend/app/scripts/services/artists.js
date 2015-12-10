'use strict';

angular.module('nodebot')
  .factory('artistsDS', artistsDSFactory);


function Artist(data) {
  this._construct(data);
}

Artist.prototype._construct = function(data) {
  var self = this;
  _.each(data, function(value, key) {
    self[key] = value;
  });
};

Artist.prototype.isGenderInRange = function(range) {
  if(!this.gender) return false;

  var genders = [];
  if(range.male) genders.push('M');
  if(range.female) genders.push('F');
  return genders.indexOf(this.gender) !== -1;
};

Artist.prototype.isAgeInRange = function(range) {
  if(!this.age) return false;
  return this.age >= parseInt(range.min) && this.age <= parseInt(range.max);
};

Artist.prototype.isRateInRange = function(range) {
  if(!this.rate) return false;
  return this.rate >= parseFloat(range.min) && this.rate <= parseFloat(range.max);
};

function artistsDSFactory() {
  var artists = [
    {
        "uuid": "f853578c-fc0f-4e65-81b8-566c5dffa35a",
        "gender": "F",
        "age": 39,
        "longitude": "-0.09998975",
        "rate": 14.21,
        "latitude": "51.75436293"
    },
    {
        "uuid": "fe2c3195-aeff-487a-a08f-e0bdc0ec6e9a",
        "gender": "M",
        "age": 66,
        "longitude": "0.18228006",
        "rate": 39.5,
        "latitude": "51.74640997"
    },
    {
        "uuid": "913694c6-435a-4366-ba0d-da5334a611b2",
        "gender": "M",
        "age": 60,
        "longitude": "0.27891577",
        "rate": 27.77,
        "latitude": "51.45994069"
    },
    {
        "uuid": "eed76e77-55c1-41ce-985d-ca49bf6c0585",
        "gender": "M",
        "age": 48,
        "longitude": "0.33894476",
        "rate": 30.44,
        "latitude": "51.39916678"
    },
    {
        "uuid": "f767e397-425e-4e4a-9c24-513fa9de3d0e",
        "gender": "F",
        "age": 62,
        "longitude": "-0.03619345",
        "rate": 31.81,
        "latitude": "51.38298169"
    },
    {
        "uuid": "6b21cdc2-671e-4616-9b9c-2174938b3365",
        "gender": "F",
        "age": 43,
        "longitude": "-0.4515359",
        "rate": 20.66,
        "latitude": "51.77473327"
    },
    {
        "uuid": "68325d40-6b44-4f62-88dc-175aea228bb3",
        "gender": "F",
        "age": 48,
        "longitude": "-0.43406943",
        "rate": 38.81,
        "latitude": "51.67794503"
    },
    {
        "uuid": "9d580ad6-aa69-451e-8f62-7646b9554b63",
        "gender": "M",
        "age": 73,
        "longitude": "-0.15538228",
        "rate": 17.23,
        "latitude": "51.29508837"
    },
    {
        "uuid": "7cc0e109-7fd8-4adf-be4d-b4cf31e717bf",
        "gender": "M",
        "age": 36,
        "longitude": "0.06180451",
        "rate": 38.89,
        "latitude": "51.78966965"
    },
    {
        "uuid": "763d5169-0e1d-4cd1-a037-b10a50469a8a",
        "gender": "M",
        "age": 17,
        "longitude": "-0.62940395",
        "rate": 28.76,
        "latitude": "51.48023146"
    },
    {
        "uuid": "5dba8588-ba1f-46fb-9d79-7e364693c784",
        "gender": "F",
        "age": 44,
        "longitude": "-0.10091239",
        "rate": 39.15,
        "latitude": "51.55895069"
    },
    {
        "uuid": "efb9c919-30c6-42db-9c90-2777e68c160b",
        "gender": "M",
        "age": 35,
        "longitude": "0.13100808",
        "rate": 22.48,
        "latitude": "51.33747695"
    },
    {
        "uuid": "f73b28c6-6758-4421-899b-31cfd706d6d7",
        "gender": "M",
        "age": 44,
        "longitude": "-0.59912969",
        "rate": 16.26,
        "latitude": "51.52029639"
    },
    {
        "uuid": "cd3b7224-4c41-449b-ada7-081ac8604ed8",
        "gender": "M",
        "age": 74,
        "longitude": "0.35765547",
        "rate": 22.61,
        "latitude": "51.63919173"
    },
    {
        "uuid": "6697a389-4146-445b-955f-e119f941990c",
        "gender": "F",
        "age": 72,
        "longitude": "-0.06331814",
        "rate": 36.57,
        "latitude": "51.1669683"
    },
    {
        "uuid": "2cb3b0a9-fe1c-4c0d-9882-3ec3c6f050b4",
        "gender": "F",
        "age": 36,
        "longitude": "-0.48706403",
        "rate": 10.48,
        "latitude": "51.39670985"
    },
    {
        "uuid": "36e34496-b566-4454-b385-cee16e07f90c",
        "gender": "M",
        "age": 40,
        "longitude": "-0.40696986",
        "rate": 25.95,
        "latitude": "51.3121092"
    },
    {
        "uuid": "b5c145f8-7be8-4f91-a00f-d2fce680e3c8",
        "gender": "F",
        "age": 20,
        "longitude": "-0.42759478",
        "rate": 31.34,
        "latitude": "51.69805732"
    },
    {
        "uuid": "086dacf7-1d71-417a-8bf3-9195bc2af18c",
        "gender": "M",
        "age": 56,
        "longitude": "0.16058823",
        "rate": 32.57,
        "latitude": "51.52204724"
    },
    {
        "uuid": "562aeb59-e53c-4f9a-83f2-271b2bec3569",
        "gender": "F",
        "age": 65,
        "longitude": "-0.57564161",
        "rate": 13.89,
        "latitude": "51.37052207"
    },
    {
        "uuid": "4db46a4d-4b84-42a8-9e9f-7317adf0846c",
        "gender": "F",
        "age": 40,
        "longitude": "-0.01774843",
        "rate": 13.86,
        "latitude": "51.68934959"
    },
    {
        "uuid": "41465dd5-08cf-406b-bc45-47d6ab0a7391",
        "gender": "F",
        "age": 55,
        "longitude": "-0.62690422",
        "rate": 17.36,
        "latitude": "51.63387467"
    },
    {
        "uuid": "43b209eb-8c4e-4343-b3b1-8128c2ca7841",
        "gender": "M",
        "age": 54,
        "longitude": "-0.55052655",
        "rate": 24.69,
        "latitude": "51.61016434"
    },
    {
        "uuid": "64d9a470-2035-4846-b208-e1d4c40b0ae1",
        "gender": "M",
        "age": 20,
        "longitude": "-0.05824087",
        "rate": 25.16,
        "latitude": "51.41367415"
    },
    {
        "uuid": "5f1c5b95-065b-4db0-aeef-8aa4c3149d78",
        "gender": "M",
        "age": 30,
        "longitude": "0.19017479",
        "rate": 22.38,
        "latitude": "51.79521295"
    },
    {
        "uuid": "08b31b34-8b4e-4210-9484-d1cc1578a5c7",
        "gender": "M",
        "age": 29,
        "longitude": "-0.15947899",
        "rate": 26.71,
        "latitude": "51.14913181"
    },
    {
        "uuid": "f3bb74d6-857a-4958-b815-89e2441be628",
        "gender": "F",
        "age": 60,
        "longitude": "0.2264311",
        "rate": 14.04,
        "latitude": "51.40936793"
    },
    {
        "uuid": "05ff8746-6782-4b5b-a376-a98ac39109a1",
        "gender": "M",
        "age": 49,
        "longitude": "-0.07451044",
        "rate": 24.05,
        "latitude": "51.30386603"
    },
    {
        "uuid": "1e7ee953-e632-41ca-8317-bd87b0a33b06",
        "gender": "M",
        "age": 72,
        "longitude": "0.03087392",
        "rate": 36.54,
        "latitude": "51.37824058"
    },
    {
        "uuid": "3dfa71ed-ee91-4c05-b61f-436cf7b79723",
        "gender": "M",
        "age": 51,
        "longitude": "-0.59428715",
        "rate": 36.2,
        "latitude": "51.40396922"
    },
    {
        "uuid": "5f5877b6-32d0-4823-95f1-e46d269f5ad9",
        "gender": "M",
        "age": 62,
        "longitude": "-0.40483652",
        "rate": 22.28,
        "latitude": "51.26318703"
    },
    {
        "uuid": "82017e69-1af0-492c-aa0d-611c9ff989c5",
        "gender": "M",
        "age": 63,
        "longitude": "-0.58209022",
        "rate": 29.21,
        "latitude": "51.44222206"
    },
    {
        "uuid": "1b11fd69-464b-426c-85cf-ed49a823b0ca",
        "gender": "F",
        "age": 21,
        "longitude": "-0.35437814",
        "rate": 24.33,
        "latitude": "51.74881642"
    },
    {
        "uuid": "d8944235-0f5b-4911-87bc-ee15f34bb347",
        "gender": "F",
        "age": 56,
        "longitude": "0.06111321",
        "rate": 34.89,
        "latitude": "51.36055277"
    },
    {
        "uuid": "844e2746-6d2c-41ec-b036-2003606e3cea",
        "gender": "M",
        "age": 22,
        "longitude": "0.35228406",
        "rate": 29.03,
        "latitude": "51.66030216"
    },
    {
        "uuid": "64d862f7-9f03-4e55-800c-1bd4a8e887ad",
        "gender": "F",
        "age": 54,
        "longitude": "-0.0941355",
        "rate": 23.26,
        "latitude": "51.1988837"
    },
    {
        "uuid": "c108c6ce-be96-4acf-ac9d-48583fc5e4ea",
        "gender": "M",
        "age": 34,
        "longitude": "0.14613454",
        "rate": 36.15,
        "latitude": "51.55434613"
    },
    {
        "uuid": "c80b6012-5182-4947-bdc7-267818c2bf33",
        "gender": "F",
        "age": 44,
        "longitude": "-0.14745535",
        "rate": 22.61,
        "latitude": "51.30594334"
    },
    {
        "uuid": "db615cdc-a0c5-449e-b4f9-29a6d3d73d58",
        "gender": "F",
        "age": 74,
        "longitude": "0.14431745",
        "rate": 28.28,
        "latitude": "51.54294187"
    },
    {
        "uuid": "0c2b7722-aa1f-4437-8319-88ded46b5481",
        "gender": "F",
        "age": 23,
        "longitude": "0.08041468",
        "rate": 38.14,
        "latitude": "51.83243416"
    },
    {
        "uuid": "7b6d53ba-bd74-4f26-a4d9-7d4a1c7e4713",
        "gender": "M",
        "age": 36,
        "longitude": "-0.64614466",
        "rate": 35.69,
        "latitude": "51.36217441"
    },
    {
        "uuid": "86377cfe-f0c7-4407-9413-26eb063f105e",
        "gender": "M",
        "age": 73,
        "longitude": "0.26422566",
        "rate": 33.15,
        "latitude": "51.290539"
    },
    {
        "uuid": "b9d48fe4-04d6-4291-b843-27a3372a251e",
        "gender": "M",
        "age": 46,
        "longitude": "-0.09022287",
        "rate": 36.71,
        "latitude": "51.80601013"
    },
    {
        "uuid": "1d905648-63e4-49d1-88ce-3652e51cfb93",
        "gender": "F",
        "age": 44,
        "longitude": "0.0106814",
        "rate": 28.11,
        "latitude": "51.80520398"
    },
    {
        "uuid": "732906ba-5035-4c85-9a73-25c7aff3f413",
        "gender": "F",
        "age": 20,
        "longitude": "0.06905069",
        "rate": 32.12,
        "latitude": "51.19624087"
    },
    {
        "uuid": "d33a18ee-effe-473b-8aa0-5c049ce1e9e7",
        "gender": "F",
        "age": 32,
        "longitude": "-0.6464773",
        "rate": 22.33,
        "latitude": "51.44467481"
    },
    {
        "uuid": "78a476f1-ee8f-415f-95ce-9a2b7be63d29",
        "gender": "M",
        "age": 47,
        "longitude": "-0.35250314",
        "rate": 34.42,
        "latitude": "51.26035307"
    },
    {
        "uuid": "0263c32b-b270-479f-9481-0e87932e655f",
        "gender": "M",
        "age": 18,
        "longitude": "-0.16070106",
        "rate": 20.46,
        "latitude": "51.42459677"
    },
    {
        "uuid": "f32550be-a661-4ac1-97d1-de492a867bff",
        "gender": "F",
        "age": 45,
        "longitude": "-0.01657108",
        "rate": 10.5,
        "latitude": "51.38541526"
    },
    {
        "uuid": "f75daf4e-d78d-4501-8aa1-828a4dd0f11b",
        "gender": "M",
        "age": 23,
        "longitude": "-0.02072128",
        "rate": 33.8,
        "latitude": "51.51312956"
    },
    {
        "uuid": "511538d3-0e4f-401a-8d71-28c7feaa34dd",
        "gender": "M",
        "age": 48,
        "longitude": "0.12786969",
        "rate": 21.69,
        "latitude": "51.23637573"
    },
    {
        "uuid": "7f07ec8e-8fde-4ec7-b993-561f4ca3f018",
        "gender": "M",
        "age": 39,
        "longitude": "-0.26702733",
        "rate": 35.74,
        "latitude": "51.70231966"
    },
    {
        "uuid": "4139fe52-030f-4fdd-bdee-1e0d0329668a",
        "gender": "M",
        "age": 36,
        "longitude": "-0.1291314",
        "rate": 23.29,
        "latitude": "51.54002902"
    },
    {
        "uuid": "621868df-bf1e-4e36-8d2b-a69dfaca5aac",
        "gender": "F",
        "age": 32,
        "longitude": "-0.0895928",
        "rate": 37.0,
        "latitude": "51.3909984"
    },
    {
        "uuid": "c940ed81-ce4b-4384-94dc-c03d68ea3f4a",
        "gender": "M",
        "age": 33,
        "longitude": "-0.11113093",
        "rate": 14.95,
        "latitude": "51.18061693"
    },
    {
        "uuid": "5f411e71-946d-487e-ab00-502d38b6a0ed",
        "gender": "F",
        "age": 64,
        "longitude": "-0.52060597",
        "rate": 33.28,
        "latitude": "51.39496405"
    },
    {
        "uuid": "049d0cd9-4a9f-4388-94bd-69e8cd3504f2",
        "gender": "M",
        "age": 72,
        "longitude": "0.36100903",
        "rate": 31.43,
        "latitude": "51.35814329"
    },
    {
        "uuid": "be53b8d9-cb4a-416c-a4f5-0be041229eef",
        "gender": "F",
        "age": 50,
        "longitude": "-0.30310502",
        "rate": 12.16,
        "latitude": "51.52607347"
    },
    {
        "uuid": "ba094491-c199-44f0-b00b-01850706e9f7",
        "gender": "F",
        "age": 65,
        "longitude": "0.06408462",
        "rate": 10.82,
        "latitude": "51.74024573"
    },
    {
        "uuid": "2b100e2a-795d-4ddc-a943-5c0fb865c3e8",
        "gender": "F",
        "age": 53,
        "longitude": "-0.1531376",
        "rate": 21.42,
        "latitude": "51.34949655"
    },
    {
        "uuid": "e71850a2-91dd-4d24-9072-e9b64c71e570",
        "gender": "M",
        "age": 43,
        "longitude": "-0.23252932",
        "rate": 39.14,
        "latitude": "51.69362701"
    },
    {
        "uuid": "62bad704-ca8f-403b-9417-69d897c911e0",
        "gender": "F",
        "age": 54,
        "longitude": "-0.34921036",
        "rate": 22.24,
        "latitude": "51.54756062"
    },
    {
        "uuid": "ebfe6732-827c-4449-adb5-9e900017eb1d",
        "gender": "M",
        "age": 45,
        "longitude": "-0.27434773",
        "rate": 19.71,
        "latitude": "51.60364273"
    },
    {
        "uuid": "ca85cea8-de9b-4482-a791-1a57b0c66cf9",
        "gender": "F",
        "age": 68,
        "longitude": "-0.33116329",
        "rate": 29.61,
        "latitude": "51.63101296"
    },
    {
        "uuid": "26483633-a4d4-4651-ab90-dc10c1b55f11",
        "gender": "M",
        "age": 39,
        "longitude": "-0.23957294",
        "rate": 26.73,
        "latitude": "51.38170643"
    },
    {
        "uuid": "8399c6ff-866b-4e3e-a2f0-477ff3f24609",
        "gender": "M",
        "age": 41,
        "longitude": "0.27586446",
        "rate": 14.96,
        "latitude": "51.40253821"
    },
    {
        "uuid": "866f9299-2667-431c-bcee-d70df0539535",
        "gender": "M",
        "age": 45,
        "longitude": "-0.58282505",
        "rate": 20.94,
        "latitude": "51.37480663"
    },
    {
        "uuid": "fdc91d72-aac1-4c81-8dae-1b750ef80056",
        "gender": "M",
        "age": 27,
        "longitude": "-0.2280846",
        "rate": 15.89,
        "latitude": "51.21193758"
    },
    {
        "uuid": "6e5f5c58-c564-4f1a-8fea-8f19acb4dd08",
        "gender": "M",
        "age": 30,
        "longitude": "-0.06705738",
        "rate": 22.34,
        "latitude": "51.65365556"
    },
    {
        "uuid": "e1398fbe-c59f-4693-9ac1-ac48aa38e2bd",
        "gender": "M",
        "age": 34,
        "longitude": "-0.64759385",
        "rate": 25.5,
        "latitude": "51.44953353"
    },
    {
        "uuid": "40d60508-8d34-4778-9d7a-b7208eddb421",
        "gender": "F",
        "age": 22,
        "longitude": "0.07375926",
        "rate": 39.62,
        "latitude": "51.17653149"
    },
    {
        "uuid": "420e5e44-7a6a-42f2-86a3-697f4f54ab43",
        "gender": "F",
        "age": 22,
        "longitude": "-0.65191482",
        "rate": 36.79,
        "latitude": "51.43479707"
    },
    {
        "uuid": "e372b215-5b19-46af-881f-6b3fbd91eea7",
        "gender": "F",
        "age": 47,
        "longitude": "-0.64275547",
        "rate": 36.32,
        "latitude": "51.39042342"
    },
    {
        "uuid": "3abe7e0f-8c24-4daf-89d2-a7b43b45898b",
        "gender": "M",
        "age": 18,
        "longitude": "0.00379386",
        "rate": 36.01,
        "latitude": "51.38654876"
    },
    {
        "uuid": "47155445-c268-4794-a832-decac8b5a694",
        "gender": "F",
        "age": 38,
        "longitude": "-0.0349231",
        "rate": 14.12,
        "latitude": "51.25649319"
    },
    {
        "uuid": "49cbec08-54b5-4588-9ea6-dda97bc9ab5c",
        "gender": "M",
        "age": 40,
        "longitude": "0.24399743",
        "rate": 22.24,
        "latitude": "51.67297849"
    },
    {
        "uuid": "1c239d0e-2076-441f-a182-dc92c95edc31",
        "gender": "F",
        "age": 31,
        "longitude": "-0.14925615",
        "rate": 30.69,
        "latitude": "51.72105558"
    },
    {
        "uuid": "c2cef819-335c-4306-934c-320110454070",
        "gender": "M",
        "age": 32,
        "longitude": "-0.58964056",
        "rate": 36.09,
        "latitude": "51.3460764"
    },
    {
        "uuid": "dd606a6e-f33a-4840-b357-06a9b92ff483",
        "gender": "F",
        "age": 69,
        "longitude": "0.08820926",
        "rate": 33.11,
        "latitude": "51.52198472"
    },
    {
        "uuid": "23581b87-2fa2-489a-870e-e3980abfc612",
        "gender": "F",
        "age": 37,
        "longitude": "-0.43900689",
        "rate": 14.64,
        "latitude": "51.68428739"
    },
    {
        "uuid": "e38b5293-0ff3-4e82-8205-9363a1e41d2b",
        "gender": "F",
        "age": 49,
        "longitude": "-0.41608122",
        "rate": 21.68,
        "latitude": "51.64104731"
    },
    {
        "uuid": "3f297336-dff5-4fd5-9a26-66dc81b462ac",
        "gender": "M",
        "age": 60,
        "longitude": "0.03362703",
        "rate": 20.8,
        "latitude": "51.58783228"
    },
    {
        "uuid": "dd807cd6-2a8b-47b4-be9e-4722a7037b25",
        "gender": "M",
        "age": 18,
        "longitude": "-0.43401811",
        "rate": 17.75,
        "latitude": "51.78282563"
    },
    {
        "uuid": "c0db4ff4-da43-4e68-a382-a2f25a4e4bb2",
        "gender": "M",
        "age": 74,
        "longitude": "-0.44799452",
        "rate": 26.66,
        "latitude": "51.46470638"
    },
    {
        "uuid": "7bd2b743-972d-48ba-b517-62e92b32a159",
        "gender": "M",
        "age": 51,
        "longitude": "-0.04406385",
        "rate": 32.18,
        "latitude": "51.66155534"
    },
    {
        "uuid": "1a336a03-e8dc-47f7-b6a9-8b56467a7872",
        "gender": "F",
        "age": 55,
        "longitude": "-0.60970415",
        "rate": 31.72,
        "latitude": "51.46459263"
    },
    {
        "uuid": "65ba42d9-cb89-4a37-9610-3bae5d44e638",
        "gender": "F",
        "age": 63,
        "longitude": "-0.28529834",
        "rate": 15.52,
        "latitude": "51.4040996"
    },
    {
        "uuid": "af3a8850-2ee2-4d2a-9dc5-695dbb25a305",
        "gender": "M",
        "age": 28,
        "longitude": "-0.26288558",
        "rate": 36.56,
        "latitude": "51.57541297"
    },
    {
        "uuid": "224f353e-90f9-4932-b6c7-a42a4c6bbf52",
        "gender": "F",
        "age": 22,
        "longitude": "-0.5485191",
        "rate": 23.08,
        "latitude": "51.65559088"
    },
    {
        "uuid": "3dd27df9-a421-4847-a0f5-aa1dc7754c58",
        "gender": "F",
        "age": 64,
        "longitude": "-0.19016781",
        "rate": 11.54,
        "latitude": "51.16312757"
    },
    {
        "uuid": "2ea57b06-8932-4b59-9e93-1b5fec4d70fb",
        "gender": "F",
        "age": 29,
        "longitude": "0.19172717",
        "rate": 27.87,
        "latitude": "51.78003207"
    },
    {
        "uuid": "3757476f-7a89-4665-8161-a19f14326c09",
        "gender": "M",
        "age": 25,
        "longitude": "-0.5056839",
        "rate": 10.32,
        "latitude": "51.5080463"
    },
    {
        "uuid": "c0580752-3c2e-4b9f-ad9b-15e694830044",
        "gender": "M",
        "age": 18,
        "longitude": "0.14495743",
        "rate": 27.41,
        "latitude": "51.32211923"
    },
    {
        "uuid": "cfdd9194-f773-48b5-bf6d-ffda148295ba",
        "gender": "M",
        "age": 28,
        "longitude": "0.13958473",
        "rate": 26.06,
        "latitude": "51.47396459"
    },
    {
        "uuid": "453aa79a-305f-4a42-bce7-19d456b4e9b0",
        "gender": "F",
        "age": 37,
        "longitude": "0.39845098",
        "rate": 14.8,
        "latitude": "51.6549932"
    },
    {
        "uuid": "d6a0735a-e65b-4ea6-9571-90549b033b38",
        "gender": "F",
        "age": 28,
        "longitude": "0.02422873",
        "rate": 32.35,
        "latitude": "51.42307297"
    },
    {
        "uuid": "a819cde2-ce5f-4136-8e7a-c222480f1af1",
        "gender": "F",
        "age": 20,
        "longitude": "-0.30173546",
        "rate": 28.8,
        "latitude": "51.82300108"
    },
    {
        "uuid": "239d6627-61dd-4c5b-a47c-61af4903a030",
        "gender": "F",
        "age": 74,
        "longitude": "0.09711947",
        "rate": 10.93,
        "latitude": "51.27795903"
    },
    {
        "uuid": "b175978e-eded-4eca-ac8f-a9208584646f",
        "gender": "F",
        "age": 71,
        "longitude": "0.19140624",
        "rate": 24.48,
        "latitude": "51.45338527"
    },
    {
        "uuid": "3219651f-7dbf-452c-b090-b3275bdef25e",
        "gender": "F",
        "age": 19,
        "longitude": "-0.37777878",
        "rate": 20.69,
        "latitude": "51.39177372"
    },
    {
        "uuid": "3ef0af62-595c-49c3-9aa0-eb32cc17e8d2",
        "gender": "F",
        "age": 20,
        "longitude": "-0.64897847",
        "rate": 29.42,
        "latitude": "51.36119157"
    },
    {
        "uuid": "f73cc72c-a899-4930-8df6-d6e7aafef1f1",
        "gender": "F",
        "age": 56,
        "longitude": "-0.02777574",
        "rate": 15.82,
        "latitude": "51.19797204"
    },
    {
        "uuid": "028c9754-e07c-4e94-84ad-56c3e0d9c9d2",
        "gender": "M",
        "age": 27,
        "longitude": "-0.16930891",
        "rate": 25.06,
        "latitude": "51.84871449"
    },
    {
        "uuid": "c21a1ca1-f9d1-45fa-8f85-e7a10f8d2316",
        "gender": "M",
        "age": 52,
        "longitude": "-0.04531658",
        "rate": 30.4,
        "latitude": "51.15266754"
    },
    {
        "uuid": "71f51e30-251c-4c86-99ff-089a3485bab0",
        "gender": "M",
        "age": 42,
        "longitude": "-0.14622708",
        "rate": 36.19,
        "latitude": "51.40721858"
    },
    {
        "uuid": "b63a0179-a452-48cf-b0fd-4d8a5aecd339",
        "gender": "F",
        "age": 22,
        "longitude": "-0.25524696",
        "rate": 23.05,
        "latitude": "51.46329846"
    },
    {
        "uuid": "8544eaca-4c5b-4c83-8d11-43f2917c1e71",
        "gender": "F",
        "age": 57,
        "longitude": "0.03287646",
        "rate": 26.06,
        "latitude": "51.78903526"
    },
    {
        "uuid": "87df3220-3355-472c-a2ce-2229b3a57450",
        "gender": "M",
        "age": 52,
        "longitude": "-0.45198105",
        "rate": 25.51,
        "latitude": "51.27244244"
    },
    {
        "uuid": "02949906-3c41-46e5-9920-eb2192efa708",
        "gender": "M",
        "age": 18,
        "longitude": "-0.42968262",
        "rate": 16.29,
        "latitude": "51.34836186"
    },
    {
        "uuid": "7bf678fa-9a11-411d-9398-02b4a08240bf",
        "gender": "F",
        "age": 39,
        "longitude": "-0.12917551",
        "rate": 38.57,
        "latitude": "51.6481257"
    },
    {
        "uuid": "0e7f593d-61c2-4669-aaa4-60cdcbeb330a",
        "gender": "M",
        "age": 46,
        "longitude": "-0.57238559",
        "rate": 20.33,
        "latitude": "51.63018039"
    },
    {
        "uuid": "3212970b-ea5a-4a0f-a0bc-7cb6ecd1edbf",
        "gender": "F",
        "age": 19,
        "longitude": "0.06459323",
        "rate": 34.35,
        "latitude": "51.29749101"
    },
    {
        "uuid": "9a91312e-728b-4c05-aa3e-e51fc6af53a6",
        "gender": "M",
        "age": 73,
        "longitude": "0.17582729",
        "rate": 20.39,
        "latitude": "51.29685287"
    },
    {
        "uuid": "5a45175d-a657-4dd2-ad50-1ee9af027344",
        "gender": "M",
        "age": 64,
        "longitude": "-0.62048879",
        "rate": 12.07,
        "latitude": "51.55081369"
    },
    {
        "uuid": "fe130abc-9acd-414e-a100-206f373dca51",
        "gender": "F",
        "age": 64,
        "longitude": "-0.54050403",
        "rate": 32.19,
        "latitude": "51.28959024"
    },
    {
        "uuid": "4dec9a1c-d919-4b57-ad52-fa608f3b371d",
        "gender": "F",
        "age": 72,
        "longitude": "0.31756583",
        "rate": 27.71,
        "latitude": "51.399011"
    },
    {
        "uuid": "7ece0e54-1ea0-4ed0-b09f-daeab2b50fb4",
        "gender": "M",
        "age": 62,
        "longitude": "-0.44678221",
        "rate": 10.14,
        "latitude": "51.30241711"
    },
    {
        "uuid": "2a2a99bb-46e8-4b85-b9bd-4dd3c7d3039d",
        "gender": "M",
        "age": 30,
        "longitude": "-0.42958112",
        "rate": 28.48,
        "latitude": "51.58967084"
    },
    {
        "uuid": "2d4a1d18-3785-4f6d-95ff-1ccf78a42c9a",
        "gender": "M",
        "age": 54,
        "longitude": "-0.29591756",
        "rate": 27.09,
        "latitude": "51.51774832"
    },
    {
        "uuid": "94ab9d86-1cf4-4a7c-8cfb-1382d02ffeae",
        "gender": "F",
        "age": 48,
        "longitude": "0.20392237",
        "rate": 29.91,
        "latitude": "51.50755685"
    },
    {
        "uuid": "974331fd-b8ef-453f-9609-87cafb1a79cf",
        "gender": "F",
        "age": 66,
        "longitude": "-0.30240164",
        "rate": 39.44,
        "latitude": "51.81406264"
    },
    {
        "uuid": "2d73aef6-3290-4669-a5c6-b25377c33d09",
        "gender": "M",
        "age": 43,
        "longitude": "-0.41667625",
        "rate": 23.94,
        "latitude": "51.31126979"
    },
    {
        "uuid": "1e529310-b9bc-495f-b4c4-2a81abf955af",
        "gender": "M",
        "age": 41,
        "longitude": "-0.15235224",
        "rate": 32.77,
        "latitude": "51.68162113"
    },
    {
        "uuid": "ce28182e-599e-4039-8f4f-54d6f8648e6c",
        "gender": "F",
        "age": 33,
        "longitude": "-0.70008867",
        "rate": 33.97,
        "latitude": "51.4689982"
    },
    {
        "uuid": "eacc61fc-d1eb-4d12-ab14-1c843cc240e3",
        "gender": "F",
        "age": 55,
        "longitude": "0.17364454",
        "rate": 12.91,
        "latitude": "51.55990561"
    },
    {
        "uuid": "6d16c084-d0ab-44d2-9836-3b90f388c4aa",
        "gender": "F",
        "age": 43,
        "longitude": "0.13892989",
        "rate": 38.7,
        "latitude": "51.72366424"
    },
    {
        "uuid": "d0a04604-1ec7-4049-9d71-f69e842a64c6",
        "gender": "M",
        "age": 74,
        "longitude": "-0.48960659",
        "rate": 21.42,
        "latitude": "51.54498917"
    },
    {
        "uuid": "97df3671-3fb6-4b25-b7b1-cdbe025530f2",
        "gender": "M",
        "age": 61,
        "longitude": "0.03269136",
        "rate": 18.76,
        "latitude": "51.80846447"
    },
    {
        "uuid": "11c9dcad-fd7c-4606-b71a-b528ded1d2dc",
        "gender": "M",
        "age": 49,
        "longitude": "0.35760134",
        "rate": 28.5,
        "latitude": "51.492541"
    },
    {
        "uuid": "0ccd2aa0-b57d-4d4b-8ded-e5d31dd67310",
        "gender": "M",
        "age": 71,
        "longitude": "-0.29535145",
        "rate": 10.55,
        "latitude": "51.62579532"
    },
    {
        "uuid": "492a9e76-483d-4405-b01c-b2c201bafc4b",
        "gender": "F",
        "age": 52,
        "longitude": "-0.32010173",
        "rate": 28.34,
        "latitude": "51.65378479"
    },
    {
        "uuid": "d62dc9ab-8486-44b0-8386-741037a28358",
        "gender": "M",
        "age": 27,
        "longitude": "-0.37680879",
        "rate": 13.25,
        "latitude": "51.58103026"
    },
    {
        "uuid": "3ffeabf9-e5f1-4281-be3d-d28cd574d857",
        "gender": "F",
        "age": 19,
        "longitude": "-0.29154391",
        "rate": 24.37,
        "latitude": "51.75872619"
    },
    {
        "uuid": "cae64cb6-b43c-4d77-86e8-c80b78b506bf",
        "gender": "F",
        "age": 18,
        "longitude": "0.2413046",
        "rate": 28.23,
        "latitude": "51.68512015"
    },
    {
        "uuid": "7ad55f72-24ac-4743-a101-56fa9306ca6c",
        "gender": "F",
        "age": 53,
        "longitude": "-0.30644357",
        "rate": 18.42,
        "latitude": "51.27735901"
    },
    {
        "uuid": "bfe549b7-c075-439e-ac06-f055abd6df2c",
        "gender": "M",
        "age": 55,
        "longitude": "0.02890091",
        "rate": 34.06,
        "latitude": "51.7643113"
    },
    {
        "uuid": "85426080-d406-477a-92f7-4e1f4bcef42f",
        "gender": "M",
        "age": 64,
        "longitude": "-0.49589158",
        "rate": 30.31,
        "latitude": "51.28586079"
    },
    {
        "uuid": "82521375-de27-4a20-8ae6-22277ecf815b",
        "gender": "M",
        "age": 39,
        "longitude": "-0.13569095",
        "rate": 11.37,
        "latitude": "51.27619677"
    },
    {
        "uuid": "41d13179-bb6a-4706-9fd0-6c66c5feb74c",
        "gender": "M",
        "age": 57,
        "longitude": "-0.54385695",
        "rate": 12.46,
        "latitude": "51.65434547"
    },
    {
        "uuid": "4d9bde26-2826-489c-bd4c-2caa03a459ab",
        "gender": "M",
        "age": 50,
        "longitude": "0.34613886",
        "rate": 35.46,
        "latitude": "51.49041548"
    },
    {
        "uuid": "1da883b1-e600-456a-8dd3-73da9a6f06cd",
        "gender": "F",
        "age": 41,
        "longitude": "-0.28901575",
        "rate": 21.74,
        "latitude": "51.70189827"
    },
    {
        "uuid": "c0f053cc-2ed5-42ce-8924-168d11f6bdd3",
        "gender": "F",
        "age": 66,
        "longitude": "-0.17989587",
        "rate": 37.59,
        "latitude": "51.30207455"
    },
    {
        "uuid": "4047c4d4-a225-4c8e-a7b5-6cf0cff4bfce",
        "gender": "M",
        "age": 61,
        "longitude": "-0.12816903",
        "rate": 11.2,
        "latitude": "51.43933481"
    },
    {
        "uuid": "1cd3dac0-c0cd-4447-b218-1d0cadb3f637",
        "gender": "M",
        "age": 69,
        "longitude": "-0.00091368",
        "rate": 33.64,
        "latitude": "51.48886209"
    },
    {
        "uuid": "012765cd-afa0-40a7-93c7-319334f27944",
        "gender": "M",
        "age": 35,
        "longitude": "0.23436723",
        "rate": 26.83,
        "latitude": "51.45692512"
    },
    {
        "uuid": "19574023-993b-4813-977e-e9d2f9c9f5bd",
        "gender": "F",
        "age": 42,
        "longitude": "-0.6830333",
        "rate": 22.15,
        "latitude": "51.44037372"
    },
    {
        "uuid": "94adaa98-7064-417d-a762-f8943ff7119f",
        "gender": "M",
        "age": 52,
        "longitude": "-0.16511544",
        "rate": 28.65,
        "latitude": "51.59954498"
    },
    {
        "uuid": "89113140-8a7b-4459-8683-d76a7a3d50f2",
        "gender": "M",
        "age": 35,
        "longitude": "-0.0754544",
        "rate": 39.81,
        "latitude": "51.66401571"
    },
    {
        "uuid": "3ed85abd-d48d-44d4-8117-18d9b6770e64",
        "gender": "F",
        "age": 59,
        "longitude": "-0.58757417",
        "rate": 22.41,
        "latitude": "51.35854056"
    },
    {
        "uuid": "8ac34ec4-c85e-488f-b697-6b2803248ee3",
        "gender": "M",
        "age": 17,
        "longitude": "0.38980335",
        "rate": 33.07,
        "latitude": "51.64101483"
    },
    {
        "uuid": "65ba6ecf-10ea-4eb4-9057-819ea9c9d3f4",
        "gender": "F",
        "age": 68,
        "longitude": "-0.6114023",
        "rate": 10.95,
        "latitude": "51.59044217"
    },
    {
        "uuid": "1c8d2335-c18f-4013-bd25-594c4488af7c",
        "gender": "F",
        "age": 18,
        "longitude": "0.2758754",
        "rate": 24.3,
        "latitude": "51.75125267"
    },
    {
        "uuid": "a99dbef2-25a6-4c1a-b1cd-afb9ab90fa98",
        "gender": "F",
        "age": 46,
        "longitude": "-0.23138825",
        "rate": 35.39,
        "latitude": "51.31499108"
    },
    {
        "uuid": "9e2302cc-7166-44fd-a8d4-8bc129b5505a",
        "gender": "F",
        "age": 51,
        "longitude": "0.37178446",
        "rate": 22.55,
        "latitude": "51.47915364"
    },
    {
        "uuid": "67592185-b325-48ae-a1c7-1236ed44ca90",
        "gender": "F",
        "age": 18,
        "longitude": "-0.69789512",
        "rate": 30.62,
        "latitude": "51.49654618"
    },
    {
        "uuid": "13d5a3da-c9af-42c3-a200-6b4f4d5b3ad5",
        "gender": "F",
        "age": 18,
        "longitude": "0.21466864",
        "rate": 20.31,
        "latitude": "51.58670849"
    },
    {
        "uuid": "8624165d-7a28-4f44-8cd0-d8f5eb3f3e7d",
        "gender": "M",
        "age": 31,
        "longitude": "-0.69219509",
        "rate": 27.73,
        "latitude": "51.50659018"
    },
    {
        "uuid": "320360e5-ba16-4aa2-bb6c-0e9543a46418",
        "gender": "M",
        "age": 36,
        "longitude": "-0.39083701",
        "rate": 29.2,
        "latitude": "51.59287889"
    },
    {
        "uuid": "e771e165-8317-4454-937d-1f8d1d70519b",
        "gender": "F",
        "age": 38,
        "longitude": "-0.46647558",
        "rate": 27.27,
        "latitude": "51.47982332"
    },
    {
        "uuid": "d560edbb-a319-4524-a784-9c210123ec93",
        "gender": "F",
        "age": 67,
        "longitude": "-0.09714494",
        "rate": 36.47,
        "latitude": "51.4796158"
    },
    {
        "uuid": "f5984091-7dca-4cc6-a107-815e60d63630",
        "gender": "M",
        "age": 47,
        "longitude": "0.10830005",
        "rate": 21.69,
        "latitude": "51.78591512"
    },
    {
        "uuid": "54452b50-9a22-45b8-8a8c-0f290fedae9d",
        "gender": "M",
        "age": 30,
        "longitude": "0.18052599",
        "rate": 17.1,
        "latitude": "51.75354822"
    },
    {
        "uuid": "0b0f042e-1a8d-42a3-983d-fef70d6e23f8",
        "gender": "M",
        "age": 30,
        "longitude": "-0.57505569",
        "rate": 28.67,
        "latitude": "51.57228225"
    },
    {
        "uuid": "62b911b0-05de-440d-8735-eacb49668c84",
        "gender": "M",
        "age": 44,
        "longitude": "0.24677692",
        "rate": 15.4,
        "latitude": "51.35187634"
    },
    {
        "uuid": "edec0b28-58fb-4784-b13f-36b395ee11cb",
        "gender": "F",
        "age": 73,
        "longitude": "-0.51210479",
        "rate": 19.63,
        "latitude": "51.41425534"
    },
    {
        "uuid": "9759dca4-c4ba-4f94-bb83-e1c83001c2ef",
        "gender": "M",
        "age": 24,
        "longitude": "0.19341273",
        "rate": 11.26,
        "latitude": "51.65942644"
    },
    {
        "uuid": "2d7eec1d-e39e-4629-acfa-473746a1f51e",
        "gender": "M",
        "age": 44,
        "longitude": "0.17057161",
        "rate": 31.22,
        "latitude": "51.55083111"
    },
    {
        "uuid": "3fc3b931-a836-4a00-9f2f-24ee71887857",
        "gender": "F",
        "age": 59,
        "longitude": "0.07623762",
        "rate": 13.44,
        "latitude": "51.27641895"
    },
    {
        "uuid": "9af732a0-eae0-427a-be48-d1c404b1112f",
        "gender": "M",
        "age": 56,
        "longitude": "-0.39534183",
        "rate": 14.44,
        "latitude": "51.22670415"
    },
    {
        "uuid": "c6aa3820-e87e-44bc-85a0-8150aa75b5c5",
        "gender": "M",
        "age": 53,
        "longitude": "0.39876262",
        "rate": 36.86,
        "latitude": "51.3652669"
    },
    {
        "uuid": "de5e8aac-68da-4adf-9e71-5869a4536fb2",
        "gender": "M",
        "age": 22,
        "longitude": "0.43153787",
        "rate": 23.8,
        "latitude": "51.43691266"
    },
    {
        "uuid": "ddf7d9a3-a953-4254-be41-9a46d78728b6",
        "gender": "M",
        "age": 44,
        "longitude": "0.0694319",
        "rate": 28.01,
        "latitude": "51.41643816"
    },
    {
        "uuid": "49aac86d-64b7-42fe-aca7-c205924c964b",
        "gender": "M",
        "age": 41,
        "longitude": "-0.64537944",
        "rate": 10.67,
        "latitude": "51.4565443"
    },
    {
        "uuid": "e393ed62-91f7-4770-b746-3cc63855d585",
        "gender": "F",
        "age": 27,
        "longitude": "0.01467515",
        "rate": 28.12,
        "latitude": "51.27082474"
    },
    {
        "uuid": "aadc80f4-13c1-4c1d-b31b-b4de758d3155",
        "gender": "F",
        "age": 61,
        "longitude": "0.04560873",
        "rate": 12.02,
        "latitude": "51.50191719"
    },
    {
        "uuid": "a60e8512-b661-4c1b-a51c-f743a086be52",
        "gender": "F",
        "age": 64,
        "longitude": "-0.02118685",
        "rate": 16.98,
        "latitude": "51.25430683"
    },
    {
        "uuid": "91671db7-c5ea-4455-ba33-c1863f4a17f3",
        "gender": "M",
        "age": 69,
        "longitude": "-0.39972286",
        "rate": 18.97,
        "latitude": "51.420781"
    },
    {
        "uuid": "1de5ffcd-4d82-4342-8b4f-bb49f220f81e",
        "gender": "M",
        "age": 60,
        "longitude": "-0.17220577",
        "rate": 33.22,
        "latitude": "51.30453523"
    },
    {
        "uuid": "5c47e7f6-d0c2-4df2-b01c-2207ff73c870",
        "gender": "F",
        "age": 43,
        "longitude": "-0.43351866",
        "rate": 11.34,
        "latitude": "51.37109438"
    },
    {
        "uuid": "8dd5165d-b613-40d1-be26-8f3831224ed9",
        "gender": "F",
        "age": 39,
        "longitude": "-0.57049127",
        "rate": 35.39,
        "latitude": "51.5659476"
    },
    {
        "uuid": "729e1d1f-0dd4-4cdf-9f21-024b58037062",
        "gender": "F",
        "age": 21,
        "longitude": "-0.64298869",
        "rate": 28.29,
        "latitude": "51.54096193"
    },
    {
        "uuid": "fe37cdb8-94cb-46b5-bf5a-8b3e4559f0f8",
        "gender": "M",
        "age": 37,
        "longitude": "-0.04879174",
        "rate": 28.23,
        "latitude": "51.63886582"
    },
    {
        "uuid": "ad22735e-622e-445f-85f4-c76a4044ee61",
        "gender": "F",
        "age": 63,
        "longitude": "-0.45741435",
        "rate": 28.96,
        "latitude": "51.74040637"
    },
    {
        "uuid": "72b9f88e-e247-405d-b9c9-e36d283a1302",
        "gender": "M",
        "age": 40,
        "longitude": "0.41053339",
        "rate": 16.27,
        "latitude": "51.45047293"
    },
    {
        "uuid": "15aa535c-50a0-4c76-95fd-207c96dd1085",
        "gender": "M",
        "age": 58,
        "longitude": "0.23635056",
        "rate": 31.38,
        "latitude": "51.69519758"
    },
    {
        "uuid": "a12636c5-bdcd-4c3c-bb7c-84cbc87134b9",
        "gender": "F",
        "age": 20,
        "longitude": "-0.05646716",
        "rate": 39.34,
        "latitude": "51.29365954"
    },
    {
        "uuid": "92c8f25c-0c93-4455-a4c2-c58257b71b35",
        "gender": "M",
        "age": 22,
        "longitude": "-0.5931455",
        "rate": 18.35,
        "latitude": "51.68222704"
    },
    {
        "uuid": "ac9fa17a-2fd4-41f4-b47c-64513eebda2d",
        "gender": "M",
        "age": 17,
        "longitude": "-0.34742635",
        "rate": 20.44,
        "latitude": "51.17924168"
    },
    {
        "uuid": "f3e73d93-f6ef-43d2-bf5f-2b96c8698365",
        "gender": "F",
        "age": 73,
        "longitude": "0.12369804",
        "rate": 16.28,
        "latitude": "51.55965088"
    },
    {
        "uuid": "34212f66-7c60-49d5-bb0c-f39feb7f5226",
        "gender": "F",
        "age": 73,
        "longitude": "-0.04487314",
        "rate": 24.56,
        "latitude": "51.53997424"
    },
    {
        "uuid": "73798b21-bf07-4cb7-bf46-d44deb4dcb39",
        "gender": "F",
        "age": 63,
        "longitude": "-0.29165594",
        "rate": 23.74,
        "latitude": "51.73098918"
    },
    {
        "uuid": "fca7a968-462a-45de-a2bc-991e2e30f614",
        "gender": "M",
        "age": 48,
        "longitude": "-0.04336472",
        "rate": 16.63,
        "latitude": "51.67307158"
    },
    {
        "uuid": "a3f5ad33-d225-45c6-8033-3435039552eb",
        "gender": "F",
        "age": 66,
        "longitude": "0.35770941",
        "rate": 19.08,
        "latitude": "51.33250675"
    },
    {
        "uuid": "c6de91fc-ac44-4309-b206-6a37b0658ab4",
        "gender": "F",
        "age": 20,
        "longitude": "0.0321785",
        "rate": 27.58,
        "latitude": "51.5741628"
    },
    {
        "uuid": "cfe272c4-1eeb-48b3-adbd-4ad3dc5cdba6",
        "gender": "F",
        "age": 58,
        "longitude": "-0.54888369",
        "rate": 19.14,
        "latitude": "51.49255053"
    },
    {
        "uuid": "80d783a9-e59e-4e9b-8ee5-da24cca24179",
        "gender": "F",
        "age": 45,
        "longitude": "0.06917039",
        "rate": 18.13,
        "latitude": "51.42196004"
    },
    {
        "uuid": "4725b8e2-eb59-413e-8fb6-0ca4de4a7283",
        "gender": "M",
        "age": 18,
        "longitude": "-0.32973335",
        "rate": 10.31,
        "latitude": "51.80852714"
    },
    {
        "uuid": "972e1fec-f5a9-4106-b0af-707050426904",
        "gender": "F",
        "age": 27,
        "longitude": "-0.05409372",
        "rate": 11.53,
        "latitude": "51.44849263"
    },
    {
        "uuid": "f5aecb12-878a-45f0-a9a0-572bb29fc2fb",
        "gender": "M",
        "age": 62,
        "longitude": "0.3118758",
        "rate": 20.17,
        "latitude": "51.48264845"
    },
    {
        "uuid": "a79a86d2-0163-4fb5-9451-5d8692b311e6",
        "gender": "M",
        "age": 22,
        "longitude": "0.32068812",
        "rate": 36.2,
        "latitude": "51.4040027"
    },
    {
        "uuid": "1bcf9e0a-4ea6-4e79-a13c-2ccff02b057c",
        "gender": "M",
        "age": 28,
        "longitude": "-0.00112887",
        "rate": 34.44,
        "latitude": "51.67983168"
    },
    {
        "uuid": "ccf9b5a4-9f0e-49c4-b5f0-c4b2f7b89917",
        "gender": "M",
        "age": 43,
        "longitude": "0.17618766",
        "rate": 29.35,
        "latitude": "51.75053914"
    },
    {
        "uuid": "826d646d-b4bd-4739-81f9-4afc53420bf4",
        "gender": "F",
        "age": 58,
        "longitude": "0.31776208",
        "rate": 31.37,
        "latitude": "51.32305407"
    },
    {
        "uuid": "9cc8da79-6a3a-4710-88d2-075c5c77115c",
        "gender": "F",
        "age": 26,
        "longitude": "0.16260897",
        "rate": 18.03,
        "latitude": "51.68089199"
    },
    {
        "uuid": "712253ab-29a6-4a73-8dab-e6287ab1d034",
        "gender": "M",
        "age": 42,
        "longitude": "0.42514713",
        "rate": 31.53,
        "latitude": "51.41501844"
    },
    {
        "uuid": "bd887fbd-97dd-4f34-80d3-e97c829c5c8a",
        "gender": "F",
        "age": 43,
        "longitude": "-0.46848224",
        "rate": 26.86,
        "latitude": "51.6764015"
    },
    {
        "uuid": "cbfc66e1-15d7-459f-ae8a-7be1d1e115a7",
        "gender": "F",
        "age": 56,
        "longitude": "-0.43230804",
        "rate": 14.18,
        "latitude": "51.78317035"
    },
    {
        "uuid": "1eda2634-0330-4bb9-a094-2c2ea83ce19f",
        "gender": "M",
        "age": 50,
        "longitude": "0.16621134",
        "rate": 28.01,
        "latitude": "51.40624076"
    },
    {
        "uuid": "232b0d96-8394-4c0f-b8cb-a819b9368331",
        "gender": "F",
        "age": 29,
        "longitude": "-0.24318136",
        "rate": 20.06,
        "latitude": "51.27127944"
    },
    {
        "uuid": "33b16b93-5181-4ed0-a74c-3ec679d0ed45",
        "gender": "M",
        "age": 63,
        "longitude": "0.05270535",
        "rate": 18.86,
        "latitude": "51.54969715"
    },
    {
        "uuid": "d9eef0d2-b0ef-409a-935b-ab10a5a6a046",
        "gender": "F",
        "age": 67,
        "longitude": "-0.21666812",
        "rate": 30.14,
        "latitude": "51.73742593"
    },
    {
        "uuid": "683f64b3-8f45-496c-a50d-b5dc4f6a5084",
        "gender": "F",
        "age": 23,
        "longitude": "-0.34485238",
        "rate": 37.98,
        "latitude": "51.17964917"
    },
    {
        "uuid": "3c5ea0e5-2bdb-4ddb-bd30-54f28bea4a3c",
        "gender": "M",
        "age": 25,
        "longitude": "-0.07713187",
        "rate": 16.06,
        "latitude": "51.55569332"
    },
    {
        "uuid": "eb92e659-7e8c-4551-a6d2-0372eb4612ae",
        "gender": "M",
        "age": 71,
        "longitude": "-0.28177025",
        "rate": 17.74,
        "latitude": "51.73334491"
    },
    {
        "uuid": "be9c7c2b-9f27-482d-b2fe-b503c95e95b1",
        "gender": "F",
        "age": 71,
        "longitude": "-0.36752033",
        "rate": 16.51,
        "latitude": "51.20729056"
    },
    {
        "uuid": "e13e9285-21c6-41eb-aed5-e9cb5220cc68",
        "gender": "F",
        "age": 56,
        "longitude": "-0.21593704",
        "rate": 34.74,
        "latitude": "51.21110177"
    },
    {
        "uuid": "3f7bf650-c5f2-4d00-9d11-23a62062cd6b",
        "gender": "M",
        "age": 21,
        "longitude": "-0.49125735",
        "rate": 10.93,
        "latitude": "51.63337883"
    },
    {
        "uuid": "f8bbcc23-2c97-4081-865d-0be5c8c2e60d",
        "gender": "M",
        "age": 19,
        "longitude": "-0.37669274",
        "rate": 24.72,
        "latitude": "51.29924958"
    },
    {
        "uuid": "836d2ae8-d404-4f70-859a-8f96afc313bb",
        "gender": "M",
        "age": 61,
        "longitude": "0.40470324",
        "rate": 34.27,
        "latitude": "51.62163242"
    },
    {
        "uuid": "6e50f793-4a56-43f8-91a0-c7338bd4d19b",
        "gender": "M",
        "age": 20,
        "longitude": "-0.1517393",
        "rate": 31.06,
        "latitude": "51.36104106"
    },
    {
        "uuid": "ca921b40-a9c1-43fd-b824-6945179ad7cb",
        "gender": "F",
        "age": 30,
        "longitude": "-0.23868207",
        "rate": 22.97,
        "latitude": "51.43493562"
    },
    {
        "uuid": "51212878-efcd-4340-b0a1-c533839e15b9",
        "gender": "F",
        "age": 30,
        "longitude": "-0.09696772",
        "rate": 19.54,
        "latitude": "51.2356729"
    },
    {
        "uuid": "e89bca96-1b16-4825-a251-8f538cde92c9",
        "gender": "F",
        "age": 70,
        "longitude": "0.25812803",
        "rate": 35.95,
        "latitude": "51.72368224"
    },
    {
        "uuid": "d21d78ba-efd5-408c-bd2c-be209819c3bc",
        "gender": "F",
        "age": 29,
        "longitude": "0.36267447",
        "rate": 27.71,
        "latitude": "51.43778362"
    },
    {
        "uuid": "4f5812ae-1d42-41de-924b-d2edef01ea1b",
        "gender": "F",
        "age": 44,
        "longitude": "0.29803725",
        "rate": 31.98,
        "latitude": "51.33282439"
    },
    {
        "uuid": "e4059af8-8ca6-4b04-94b8-03f00a225dfc",
        "gender": "M",
        "age": 21,
        "longitude": "-0.0656298",
        "rate": 23.27,
        "latitude": "51.47292571"
    },
    {
        "uuid": "6149ba90-0818-4cea-ada2-8449db120fc9",
        "gender": "F",
        "age": 16,
        "longitude": "-0.12628268",
        "rate": 37.77,
        "latitude": "51.55384046"
    },
    {
        "uuid": "af514ce6-56c2-420f-8665-a598d3fa7750",
        "gender": "F",
        "age": 68,
        "longitude": "0.2548598",
        "rate": 30.73,
        "latitude": "51.37049805"
    },
    {
        "uuid": "834ec0f6-52d8-4b3a-b36d-c64df58f1985",
        "gender": "M",
        "age": 21,
        "longitude": "-0.5824019",
        "rate": 22.88,
        "latitude": "51.6356478"
    },
    {
        "uuid": "a2a8daf7-8770-44f6-a03a-b7991413787a",
        "gender": "M",
        "age": 24,
        "longitude": "-0.27358696",
        "rate": 26.51,
        "latitude": "51.5939785"
    },
    {
        "uuid": "a0096e2a-e13a-450e-b803-a18b5e941baa",
        "gender": "M",
        "age": 39,
        "longitude": "-0.00122881",
        "rate": 26.01,
        "latitude": "51.29995033"
    },
    {
        "uuid": "6472ac1e-1f81-462b-beb7-1e78ceb8b377",
        "gender": "F",
        "age": 34,
        "longitude": "-0.28153385",
        "rate": 25.73,
        "latitude": "51.51916308"
    },
    {
        "uuid": "179fe6e0-0ba2-4c82-a64a-e61009d8511b",
        "gender": "F",
        "age": 63,
        "longitude": "-0.31528828",
        "rate": 28.53,
        "latitude": "51.667989"
    },
    {
        "uuid": "ec74727f-baa8-4cd7-ba8d-efc770befd12",
        "gender": "M",
        "age": 49,
        "longitude": "-0.12660536",
        "rate": 17.23,
        "latitude": "51.57224349"
    },
    {
        "uuid": "229f2ca0-8257-42a4-b1fc-b5c8bd618c62",
        "gender": "F",
        "age": 47,
        "longitude": "-0.05329531",
        "rate": 29.91,
        "latitude": "51.34835366"
    },
    {
        "uuid": "bd09f24f-561e-41da-8616-4381e58200b7",
        "gender": "F",
        "age": 66,
        "longitude": "0.25266903",
        "rate": 23.89,
        "latitude": "51.3811835"
    },
    {
        "uuid": "d69cd61e-9d15-451c-9c18-84842ceb9d62",
        "gender": "F",
        "age": 58,
        "longitude": "0.11083328",
        "rate": 26.71,
        "latitude": "51.48695289"
    },
    {
        "uuid": "cba9e060-ffb1-4f6f-b2ef-0b0f57e77967",
        "gender": "F",
        "age": 54,
        "longitude": "0.27798039",
        "rate": 16.73,
        "latitude": "51.39157642"
    },
    {
        "uuid": "091e4a1e-e5c3-458e-9a2f-0c1de3580a2e",
        "gender": "F",
        "age": 34,
        "longitude": "0.04278368",
        "rate": 18.57,
        "latitude": "51.60673066"
    },
    {
        "uuid": "da487632-6f49-4b02-8a9b-a1661cbb6d6f",
        "gender": "F",
        "age": 58,
        "longitude": "0.26367595",
        "rate": 12.19,
        "latitude": "51.52413855"
    },
    {
        "uuid": "0b1ac7f8-3acd-4efe-a5ee-0d7dd8f855f5",
        "gender": "M",
        "age": 66,
        "longitude": "-0.6059882",
        "rate": 33.6,
        "latitude": "51.60196433"
    },
    {
        "uuid": "65e2e3c3-947e-477c-9cd5-1136853c2deb",
        "gender": "F",
        "age": 36,
        "longitude": "-0.58114989",
        "rate": 10.97,
        "latitude": "51.51643983"
    },
    {
        "uuid": "8c0eb2af-f43b-4be4-bb6d-a26610b123f6",
        "gender": "F",
        "age": 17,
        "longitude": "-0.55565691",
        "rate": 32.24,
        "latitude": "51.30442724"
    },
    {
        "uuid": "1de17760-da24-4908-8bf9-9e17be8c7826",
        "gender": "F",
        "age": 47,
        "longitude": "-0.1133803",
        "rate": 31.98,
        "latitude": "51.84546565"
    },
    {
        "uuid": "7512fafc-4af6-4fd1-8ba0-9d4b4c397ffe",
        "gender": "M",
        "age": 32,
        "longitude": "-0.12108476",
        "rate": 38.0,
        "latitude": "51.14903044"
    },
    {
        "uuid": "2adb8c5a-5cae-4247-970c-d7a40eea00ec",
        "gender": "F",
        "age": 46,
        "longitude": "0.23785691",
        "rate": 23.95,
        "latitude": "51.64881314"
    },
    {
        "uuid": "43b04ac0-7036-4b55-a5d0-ed9e4ab41cf6",
        "gender": "F",
        "age": 35,
        "longitude": "-0.68632324",
        "rate": 12.06,
        "latitude": "51.54959626"
    },
    {
        "uuid": "62ef18c2-828e-45cb-bce1-d26dd7aec815",
        "gender": "M",
        "age": 58,
        "longitude": "0.35152",
        "rate": 10.43,
        "latitude": "51.42066486"
    },
    {
        "uuid": "8aea75b1-498a-4ab2-ace2-034b6b962ee4",
        "gender": "F",
        "age": 21,
        "longitude": "0.07656326",
        "rate": 21.2,
        "latitude": "51.29399202"
    },
    {
        "uuid": "d58f6b82-bc24-415a-af0c-c3ff6e6616f4",
        "gender": "M",
        "age": 48,
        "longitude": "-0.35527397",
        "rate": 13.52,
        "latitude": "51.8243442"
    },
    {
        "uuid": "3d42ff30-b341-4368-aaf5-7bb5db4cb613",
        "gender": "F",
        "age": 22,
        "longitude": "0.08523938",
        "rate": 16.89,
        "latitude": "51.49052935"
    },
    {
        "uuid": "72882a7f-ec57-4ce6-9a94-5ed31d27805c",
        "gender": "M",
        "age": 72,
        "longitude": "-0.09965186",
        "rate": 13.49,
        "latitude": "51.18783345"
    },
    {
        "uuid": "fe4337f7-f399-46a3-966a-03f83cd85526",
        "gender": "M",
        "age": 61,
        "longitude": "-0.10524133",
        "rate": 29.25,
        "latitude": "51.79281411"
    },
    {
        "uuid": "91184091-0437-4d63-a8b4-9f97cf6514d7",
        "gender": "M",
        "age": 48,
        "longitude": "0.16768115",
        "rate": 15.84,
        "latitude": "51.23190284"
    },
    {
        "uuid": "62f10f7a-bede-4448-896d-ad8b5e2cdc11",
        "gender": "M",
        "age": 34,
        "longitude": "-0.21969331",
        "rate": 27.52,
        "latitude": "51.78487756"
    },
    {
        "uuid": "39d82a68-f61f-473f-b2c6-d444e45e9e57",
        "gender": "F",
        "age": 74,
        "longitude": "-0.2298747",
        "rate": 33.54,
        "latitude": "51.44269867"
    },
    {
        "uuid": "503fa228-4fc6-48ce-b94f-eb021dd4c737",
        "gender": "F",
        "age": 50,
        "longitude": "-0.35233952",
        "rate": 31.46,
        "latitude": "51.59901961"
    },
    {
        "uuid": "5608ebc0-8051-4903-b974-ecb8bcde4136",
        "gender": "F",
        "age": 71,
        "longitude": "-0.43742504",
        "rate": 18.32,
        "latitude": "51.62297787"
    },
    {
        "uuid": "b3ca2b81-8097-49fe-830e-cf9f6940a031",
        "gender": "M",
        "age": 54,
        "longitude": "0.30886372",
        "rate": 28.56,
        "latitude": "51.33944174"
    },
    {
        "uuid": "3900278d-5e6d-427c-ba16-76f0d45600a5",
        "gender": "M",
        "age": 32,
        "longitude": "-0.59444324",
        "rate": 27.78,
        "latitude": "51.41777482"
    },
    {
        "uuid": "a675159f-2040-456f-b29a-72aa67cdb960",
        "gender": "M",
        "age": 65,
        "longitude": "-0.4644662",
        "rate": 34.47,
        "latitude": "51.35494448"
    },
    {
        "uuid": "20954a99-0c53-4f7f-86b1-ee6417fdbc9f",
        "gender": "F",
        "age": 36,
        "longitude": "0.30058984",
        "rate": 14.61,
        "latitude": "51.70285481"
    },
    {
        "uuid": "d53e804d-feee-45a3-bae5-f57fe7d9e317",
        "gender": "M",
        "age": 46,
        "longitude": "-0.21118763",
        "rate": 29.71,
        "latitude": "51.55083453"
    },
    {
        "uuid": "76409e8a-de85-4ce7-ad33-d27f8ab42813",
        "gender": "F",
        "age": 36,
        "longitude": "-0.39370208",
        "rate": 27.81,
        "latitude": "51.46098697"
    },
    {
        "uuid": "a501b3d6-6ccd-43e6-99fb-011e39d2824e",
        "gender": "F",
        "age": 21,
        "longitude": "0.16287768",
        "rate": 37.06,
        "latitude": "51.80036466"
    },
    {
        "uuid": "1610baf0-7055-4ebe-98e7-713f513e3094",
        "gender": "M",
        "age": 72,
        "longitude": "-0.17342306",
        "rate": 12.2,
        "latitude": "51.51465603"
    },
    {
        "uuid": "08a6f395-046f-49a6-bb2b-716894443f9b",
        "gender": "M",
        "age": 55,
        "longitude": "-0.27443733",
        "rate": 28.51,
        "latitude": "51.33875322"
    },
    {
        "uuid": "696785d0-a4ec-4039-8ec8-3e22b7697b5a",
        "gender": "F",
        "age": 32,
        "longitude": "-0.48721913",
        "rate": 24.04,
        "latitude": "51.46835517"
    },
    {
        "uuid": "3fae6ae3-3c88-418b-8638-3b72414e7185",
        "gender": "M",
        "age": 58,
        "longitude": "-0.60003088",
        "rate": 16.88,
        "latitude": "51.50781663"
    },
    {
        "uuid": "cdb3405d-28bf-4251-87c3-116fddd95790",
        "gender": "M",
        "age": 52,
        "longitude": "-0.06566038",
        "rate": 17.22,
        "latitude": "51.48122365"
    },
    {
        "uuid": "fa943d94-8e6b-4190-9339-68f276084810",
        "gender": "F",
        "age": 28,
        "longitude": "-0.18590571",
        "rate": 39.38,
        "latitude": "51.28714315"
    },
    {
        "uuid": "6e4b7636-c693-4544-b18a-e710450b80d9",
        "gender": "M",
        "age": 33,
        "longitude": "-0.12970315",
        "rate": 25.28,
        "latitude": "51.80649132"
    },
    {
        "uuid": "a33d676a-3d4c-4299-bc50-b349e396cdfd",
        "gender": "M",
        "age": 72,
        "longitude": "0.12245233",
        "rate": 24.84,
        "latitude": "51.4898008"
    },
    {
        "uuid": "cbdf244c-1f39-42ef-b986-55647755711a",
        "gender": "F",
        "age": 63,
        "longitude": "-0.50358089",
        "rate": 18.41,
        "latitude": "51.5425833"
    },
    {
        "uuid": "e9e753fe-2e12-4283-99e4-cce7b04306bb",
        "gender": "M",
        "age": 19,
        "longitude": "-0.1539032",
        "rate": 20.11,
        "latitude": "51.77916561"
    },
    {
        "uuid": "9c816969-8063-4522-bf69-a28a8ac70fee",
        "gender": "F",
        "age": 49,
        "longitude": "-0.40687185",
        "rate": 15.45,
        "latitude": "51.77948938"
    },
    {
        "uuid": "43d2bac6-705a-42a0-b496-385e51ee060e",
        "gender": "M",
        "age": 34,
        "longitude": "-0.16128324",
        "rate": 32.76,
        "latitude": "51.38491173"
    },
    {
        "uuid": "7455ecca-ceb2-4561-b754-46619889e4ff",
        "gender": "F",
        "age": 61,
        "longitude": "0.07469487",
        "rate": 31.09,
        "latitude": "51.27182958"
    },
    {
        "uuid": "cd664d0e-65a2-4edc-a6c3-522bc734eb16",
        "gender": "M",
        "age": 17,
        "longitude": "-0.55091016",
        "rate": 14.03,
        "latitude": "51.58630471"
    },
    {
        "uuid": "650e1520-185b-477f-a92c-ca56cb344c1b",
        "gender": "F",
        "age": 72,
        "longitude": "0.09581361",
        "rate": 17.43,
        "latitude": "51.73261318"
    },
    {
        "uuid": "83efb563-ebd7-471f-83b4-8f3f418ba203",
        "gender": "F",
        "age": 59,
        "longitude": "0.27442962",
        "rate": 15.45,
        "latitude": "51.275247"
    },
    {
        "uuid": "024de30f-169d-47c5-9eb8-6f262045b0ec",
        "gender": "F",
        "age": 65,
        "longitude": "0.07169553",
        "rate": 37.62,
        "latitude": "51.5993943"
    },
    {
        "uuid": "d20a8b89-bfba-4159-95d9-6be4f760fee3",
        "gender": "F",
        "age": 62,
        "longitude": "-0.06119603",
        "rate": 24.18,
        "latitude": "51.65461152"
    },
    {
        "uuid": "3c637cad-9703-4126-81da-77df4d72c4fb",
        "gender": "M",
        "age": 61,
        "longitude": "0.20796722",
        "rate": 31.17,
        "latitude": "51.53701583"
    },
    {
        "uuid": "4b0cdac7-231b-4567-8856-a7e45eabd45a",
        "gender": "M",
        "age": 69,
        "longitude": "0.36453024",
        "rate": 13.89,
        "latitude": "51.4177095"
    },
    {
        "uuid": "106b2d77-276d-4bca-9b7c-5ab887d8e1b5",
        "gender": "M",
        "age": 58,
        "longitude": "0.20812392",
        "rate": 24.0,
        "latitude": "51.51584325"
    },
    {
        "uuid": "b7ba5092-d895-4add-9ae7-99676581b537",
        "gender": "M",
        "age": 23,
        "longitude": "-0.13649065",
        "rate": 35.22,
        "latitude": "51.64606083"
    },
    {
        "uuid": "98078205-8cdc-44ba-88d9-9ec69dd857ae",
        "gender": "M",
        "age": 54,
        "longitude": "0.021083",
        "rate": 36.04,
        "latitude": "51.46645676"
    },
    {
        "uuid": "b889b846-098b-49c0-8f0f-5c452696bd48",
        "gender": "F",
        "age": 70,
        "longitude": "-0.07048761",
        "rate": 20.21,
        "latitude": "51.72669506"
    },
    {
        "uuid": "ee6c20a8-7aae-4758-80bd-ad023a5715ba",
        "gender": "F",
        "age": 45,
        "longitude": "-0.19657601",
        "rate": 17.19,
        "latitude": "51.77474414"
    },
    {
        "uuid": "948adbc5-bd4d-4fb9-9c54-1af51559cbe1",
        "gender": "M",
        "age": 45,
        "longitude": "-0.09721416",
        "rate": 24.47,
        "latitude": "51.55673779"
    },
    {
        "uuid": "10ecbdf5-e09f-427e-8355-736771896f58",
        "gender": "F",
        "age": 68,
        "longitude": "0.40772397",
        "rate": 13.08,
        "latitude": "51.41552779"
    },
    {
        "uuid": "91012331-9421-4bb4-9c76-14856baa70da",
        "gender": "M",
        "age": 72,
        "longitude": "-0.19365645",
        "rate": 31.86,
        "latitude": "51.65433209"
    },
    {
        "uuid": "1090a567-4464-4704-ae8a-3a897be3546d",
        "gender": "F",
        "age": 51,
        "longitude": "-0.3995296",
        "rate": 14.48,
        "latitude": "51.80970634"
    },
    {
        "uuid": "d4f7b8fd-6468-42a2-93e7-c10ebc6f661b",
        "gender": "M",
        "age": 22,
        "longitude": "-0.06139933",
        "rate": 23.91,
        "latitude": "51.60762345"
    },
    {
        "uuid": "365f5891-5bb1-41f9-99e7-e8694f63efca",
        "gender": "F",
        "age": 66,
        "longitude": "0.12853867",
        "rate": 33.79,
        "latitude": "51.3215071"
    },
    {
        "uuid": "b22ce01b-39b4-4dcf-9ed8-51b52014a819",
        "gender": "F",
        "age": 73,
        "longitude": "-0.54523805",
        "rate": 30.92,
        "latitude": "51.68150365"
    },
    {
        "uuid": "e685423c-22d4-4292-a4c4-32b55234161e",
        "gender": "M",
        "age": 63,
        "longitude": "0.05268515",
        "rate": 38.75,
        "latitude": "51.20993973"
    },
    {
        "uuid": "40d89c35-3a38-49ee-b0e5-84bb0f10ff4d",
        "gender": "M",
        "age": 71,
        "longitude": "0.27010118",
        "rate": 16.24,
        "latitude": "51.53033411"
    },
    {
        "uuid": "dbd8d8e3-6dfd-4a60-a90f-f7056cdcfe45",
        "gender": "M",
        "age": 66,
        "longitude": "-0.39224523",
        "rate": 23.75,
        "latitude": "51.39050568"
    },
    {
        "uuid": "bc9ce0aa-a98b-4fb1-af49-24ab886f84be",
        "gender": "F",
        "age": 27,
        "longitude": "0.2627805",
        "rate": 22.74,
        "latitude": "51.4644894"
    },
    {
        "uuid": "1a594ba8-99c8-4d6f-8352-b9c63930d8d1",
        "gender": "F",
        "age": 33,
        "longitude": "-0.25671955",
        "rate": 38.54,
        "latitude": "51.84392134"
    },
    {
        "uuid": "16671a42-237b-4174-a819-dbedfce6817f",
        "gender": "M",
        "age": 41,
        "longitude": "-0.34531055",
        "rate": 17.45,
        "latitude": "51.36360589"
    },
    {
        "uuid": "bc6e52cd-3d80-404e-a91c-56f2ee3ca891",
        "gender": "F",
        "age": 58,
        "longitude": "0.09735431",
        "rate": 29.01,
        "latitude": "51.19230461"
    },
    {
        "uuid": "6b88d544-ed91-471c-aa9e-b02f3c36c13c",
        "gender": "M",
        "age": 26,
        "longitude": "-0.68363344",
        "rate": 27.45,
        "latitude": "51.51750453"
    },
    {
        "uuid": "df4bb7ab-6bea-4b31-ac80-17b9fa88dfe6",
        "gender": "F",
        "age": 38,
        "longitude": "-0.4637398",
        "rate": 20.35,
        "latitude": "51.73389693"
    },
    {
        "uuid": "e6689893-999b-48d1-84ee-9091ab55302b",
        "gender": "F",
        "age": 56,
        "longitude": "-0.35995783",
        "rate": 11.16,
        "latitude": "51.6025748"
    },
    {
        "uuid": "b20677f8-e1ce-40fd-82f8-b51464fbc74d",
        "gender": "M",
        "age": 62,
        "longitude": "-0.44764952",
        "rate": 11.8,
        "latitude": "51.54485555"
    },
    {
        "uuid": "33c54ffc-0faa-47e2-adaa-a4837a55ee35",
        "gender": "M",
        "age": 16,
        "longitude": "0.01819333",
        "rate": 19.29,
        "latitude": "51.2709243"
    },
    {
        "uuid": "2e789ff0-4e5a-49b6-a70d-62a3f9120b2d",
        "gender": "F",
        "age": 39,
        "longitude": "0.19282125",
        "rate": 25.14,
        "latitude": "51.44722878"
    },
    {
        "uuid": "c5a0be20-ae06-4b44-a019-ef7df7fd4ccb",
        "gender": "M",
        "age": 40,
        "longitude": "0.13849484",
        "rate": 34.03,
        "latitude": "51.19811963"
    },
    {
        "uuid": "c98bcfb0-5c5e-40dd-929c-6ca66c0287fb",
        "gender": "M",
        "age": 43,
        "longitude": "-0.10652911",
        "rate": 21.7,
        "latitude": "51.5382085"
    },
    {
        "uuid": "bcd403d1-4bf0-4beb-ba42-51eaa0806808",
        "gender": "M",
        "age": 20,
        "longitude": "-0.4048771",
        "rate": 39.65,
        "latitude": "51.74745941"
    },
    {
        "uuid": "33ecff1e-1227-4f93-9f98-e1f9ef4af70d",
        "gender": "F",
        "age": 22,
        "longitude": "-0.18047649",
        "rate": 28.39,
        "latitude": "51.54536403"
    },
    {
        "uuid": "8218d1c7-884e-44e7-8d5d-00048e41f3ff",
        "gender": "M",
        "age": 44,
        "longitude": "0.02864798",
        "rate": 28.8,
        "latitude": "51.69543335"
    },
    {
        "uuid": "0f81129c-e6bd-4582-8a68-200cd8e2d561",
        "gender": "M",
        "age": 45,
        "longitude": "0.15908925",
        "rate": 24.48,
        "latitude": "51.45676442"
    },
    {
        "uuid": "eb110d93-a74f-4c32-835e-11db0fe00eb7",
        "gender": "M",
        "age": 65,
        "longitude": "-0.02564503",
        "rate": 39.13,
        "latitude": "51.42018035"
    },
    {
        "uuid": "d7c46fe3-a898-4aa0-bc46-a597d5925cb3",
        "gender": "F",
        "age": 71,
        "longitude": "-0.32749306",
        "rate": 38.95,
        "latitude": "51.34186255"
    },
    {
        "uuid": "91fc92ea-9ac9-4329-8897-2b0ba406f1c5",
        "gender": "M",
        "age": 61,
        "longitude": "-0.48200175",
        "rate": 13.73,
        "latitude": "51.461059"
    },
    {
        "uuid": "9c5b3877-d57a-487e-b039-be8bd70795b4",
        "gender": "F",
        "age": 54,
        "longitude": "-0.39187543",
        "rate": 24.78,
        "latitude": "51.69229211"
    },
    {
        "uuid": "85b07a14-a1f5-4a61-8722-239b817d9fe4",
        "gender": "F",
        "age": 53,
        "longitude": "-0.26927636",
        "rate": 22.6,
        "latitude": "51.30398152"
    },
    {
        "uuid": "65e8d1eb-3a20-4631-8b20-d048056620e9",
        "gender": "F",
        "age": 69,
        "longitude": "-0.05780219",
        "rate": 18.17,
        "latitude": "51.78743465"
    },
    {
        "uuid": "fee43b93-26d0-4921-bc4f-edc35426a8c2",
        "gender": "F",
        "age": 17,
        "longitude": "-0.05725153",
        "rate": 29.28,
        "latitude": "51.61883242"
    },
    {
        "uuid": "0ddfdb08-f9d2-4888-9211-4ffd27a821e3",
        "gender": "F",
        "age": 43,
        "longitude": "-0.33154234",
        "rate": 31.83,
        "latitude": "51.67623923"
    },
    {
        "uuid": "56d3e40f-4693-4ad4-b503-1ad72efed13b",
        "gender": "F",
        "age": 18,
        "longitude": "-0.12460851",
        "rate": 39.47,
        "latitude": "51.30346101"
    },
    {
        "uuid": "a4823716-d38f-465b-af9a-655aa2e3dae0",
        "gender": "F",
        "age": 29,
        "longitude": "-0.23304877",
        "rate": 31.91,
        "latitude": "51.1585552"
    },
    {
        "uuid": "e2d8b926-f626-4f2b-a2ec-be70cf8b954c",
        "gender": "M",
        "age": 74,
        "longitude": "-0.09211938",
        "rate": 20.15,
        "latitude": "51.58468489"
    },
    {
        "uuid": "8eca46e3-6cc7-409c-8796-882caf87d88f",
        "gender": "M",
        "age": 48,
        "longitude": "-0.15051044",
        "rate": 36.78,
        "latitude": "51.64227293"
    },
    {
        "uuid": "117b5c0b-47ab-42b1-a7ab-9e0173fdb8c6",
        "gender": "M",
        "age": 52,
        "longitude": "-0.51782404",
        "rate": 15.08,
        "latitude": "51.27319174"
    },
    {
        "uuid": "d72bbe41-2a4d-4870-b183-6fe2efdf4018",
        "gender": "F",
        "age": 71,
        "longitude": "-0.53771965",
        "rate": 21.72,
        "latitude": "51.31988446"
    },
    {
        "uuid": "861518e6-e5b8-47fa-81c1-5b56eba8fe76",
        "gender": "M",
        "age": 33,
        "longitude": "-0.16273975",
        "rate": 33.61,
        "latitude": "51.38116334"
    },
    {
        "uuid": "82729729-89b1-42d6-9061-3c491d041ce8",
        "gender": "F",
        "age": 57,
        "longitude": "-0.20678304",
        "rate": 31.11,
        "latitude": "51.35241311"
    },
    {
        "uuid": "129f56ef-1c81-49ad-8f9b-22958141eeda",
        "gender": "M",
        "age": 59,
        "longitude": "-0.240873",
        "rate": 35.1,
        "latitude": "51.59811882"
    },
    {
        "uuid": "64bdf079-9fac-4c84-ae82-d14240e5f51b",
        "gender": "F",
        "age": 64,
        "longitude": "0.2251134",
        "rate": 38.1,
        "latitude": "51.52811171"
    },
    {
        "uuid": "4bd426c9-f677-4e66-bfe3-1f51a4fbd0b5",
        "gender": "M",
        "age": 16,
        "longitude": "-0.42009997",
        "rate": 16.17,
        "latitude": "51.78286519"
    },
    {
        "uuid": "9d690301-d6fa-48cb-965b-9e8ae65cafb8",
        "gender": "F",
        "age": 44,
        "longitude": "-0.35018976",
        "rate": 11.7,
        "latitude": "51.6915984"
    },
    {
        "uuid": "d83afffe-a12c-4420-b628-682a6129935d",
        "gender": "F",
        "age": 53,
        "longitude": "0.10296028",
        "rate": 34.12,
        "latitude": "51.83045538"
    },
    {
        "uuid": "4c0710ab-c737-4c62-a739-47ea6397c265",
        "gender": "F",
        "age": 62,
        "longitude": "0.26646478",
        "rate": 33.34,
        "latitude": "51.40095247"
    },
    {
        "uuid": "2afc2fb7-c0af-4f1d-8ecd-5d3119dc7d9b",
        "gender": "M",
        "age": 61,
        "longitude": "-0.31265585",
        "rate": 39.85,
        "latitude": "51.42306701"
    },
    {
        "uuid": "b0bd8e92-6265-4c22-b06a-42a914ee772a",
        "gender": "F",
        "age": 42,
        "longitude": "0.18320388",
        "rate": 36.3,
        "latitude": "51.37944527"
    },
    {
        "uuid": "8c4b5136-d1d4-4215-82d2-b688241df0dc",
        "gender": "F",
        "age": 60,
        "longitude": "0.34567802",
        "rate": 31.97,
        "latitude": "51.49184341"
    },
    {
        "uuid": "6f72640b-c447-4f63-80ec-4ab478403e04",
        "gender": "F",
        "age": 21,
        "longitude": "-0.63548615",
        "rate": 13.77,
        "latitude": "51.5710464"
    },
    {
        "uuid": "71b4db7b-2282-4a52-b608-6712cc452428",
        "gender": "F",
        "age": 19,
        "longitude": "-0.42399652",
        "rate": 22.35,
        "latitude": "51.7108772"
    },
    {
        "uuid": "934ae3b7-92b3-45c6-bae4-8ac9ed5bab2c",
        "gender": "F",
        "age": 41,
        "longitude": "-0.28464364",
        "rate": 36.05,
        "latitude": "51.2073513"
    },
    {
        "uuid": "4cb89a5d-1643-4236-8248-4b7058e69ea7",
        "gender": "F",
        "age": 27,
        "longitude": "-0.20848221",
        "rate": 18.63,
        "latitude": "51.8590681"
    },
    {
        "uuid": "3c2442ff-372c-462e-8c6e-a98b33cd8f7c",
        "gender": "F",
        "age": 52,
        "longitude": "0.31587228",
        "rate": 15.13,
        "latitude": "51.46273389"
    },
    {
        "uuid": "e6640149-c61d-4c5b-b91a-d5b65efea69c",
        "gender": "F",
        "age": 68,
        "longitude": "-0.17553145",
        "rate": 24.8,
        "latitude": "51.338117"
    },
    {
        "uuid": "33ba362f-4c19-4b43-b0d2-a0faf925554b",
        "gender": "F",
        "age": 54,
        "longitude": "-0.31984334",
        "rate": 36.53,
        "latitude": "51.38256428"
    },
    {
        "uuid": "dd71935c-b349-463b-863e-aa03680c527d",
        "gender": "F",
        "age": 71,
        "longitude": "0.27067151",
        "rate": 26.6,
        "latitude": "51.50540732"
    },
    {
        "uuid": "37bd0834-e9ec-41da-8a12-df4ae0282deb",
        "gender": "F",
        "age": 55,
        "longitude": "-0.30054899",
        "rate": 10.71,
        "latitude": "51.63399069"
    },
    {
        "uuid": "5bce1aa7-28c9-48e0-bc3f-3e1ac2e067d7",
        "gender": "F",
        "age": 22,
        "longitude": "-0.52008545",
        "rate": 25.75,
        "latitude": "51.26964685"
    },
    {
        "uuid": "d1053fe8-cfaf-4143-af7b-363fd7855ed0",
        "gender": "M",
        "age": 23,
        "longitude": "-0.58897021",
        "rate": 29.96,
        "latitude": "51.3152237"
    },
    {
        "uuid": "bb77022e-3ecc-4845-ae5b-33ea90adc57f",
        "gender": "M",
        "age": 58,
        "longitude": "-0.24596434",
        "rate": 24.36,
        "latitude": "51.45527213"
    },
    {
        "uuid": "b0f56e59-7721-4674-a8ef-7a6eb4d40d75",
        "gender": "F",
        "age": 59,
        "longitude": "-0.38561631",
        "rate": 34.83,
        "latitude": "51.27331712"
    },
    {
        "uuid": "ec89f67f-7021-440b-8509-598194d26275",
        "gender": "F",
        "age": 74,
        "longitude": "-0.459523",
        "rate": 36.32,
        "latitude": "51.6473951"
    },
    {
        "uuid": "30a73030-80d2-42e0-bde1-6c654d35137a",
        "gender": "F",
        "age": 55,
        "longitude": "-0.33617806",
        "rate": 36.39,
        "latitude": "51.56070846"
    },
    {
        "uuid": "348653f6-9503-4d4a-b09f-92f531668726",
        "gender": "F",
        "age": 51,
        "longitude": "0.38371729",
        "rate": 11.59,
        "latitude": "51.39053152"
    },
    {
        "uuid": "d2f276c7-09a7-4267-9f09-fce0ab7c8ba2",
        "gender": "F",
        "age": 64,
        "longitude": "-0.16014565",
        "rate": 27.53,
        "latitude": "51.19688734"
    },
    {
        "uuid": "3381757e-6e08-4b38-8cb4-8319a70577c6",
        "gender": "M",
        "age": 21,
        "longitude": "0.09094589",
        "rate": 19.68,
        "latitude": "51.46536381"
    },
    {
        "uuid": "281102d7-5074-4304-bfbc-bbed7dcd063b",
        "gender": "F",
        "age": 50,
        "longitude": "0.22809134",
        "rate": 31.74,
        "latitude": "51.78202961"
    },
    {
        "uuid": "fa43e25d-3a3b-4a7b-9763-ccfab04b3012",
        "gender": "F",
        "age": 52,
        "longitude": "0.2489938",
        "rate": 22.58,
        "latitude": "51.63681184"
    },
    {
        "uuid": "eea64c00-2a7d-463d-8129-808694529fe1",
        "gender": "M",
        "age": 16,
        "longitude": "0.3222576",
        "rate": 19.66,
        "latitude": "51.28764292"
    },
    {
        "uuid": "a2a470d9-b06f-4b7e-903c-4d169478e9d5",
        "gender": "F",
        "age": 59,
        "longitude": "0.1497596",
        "rate": 14.92,
        "latitude": "51.58663873"
    },
    {
        "uuid": "c732d761-a02f-44c8-81e5-ba7ae911f30b",
        "gender": "M",
        "age": 35,
        "longitude": "-0.04689677",
        "rate": 11.71,
        "latitude": "51.18291635"
    },
    {
        "uuid": "716c2060-a053-4662-8761-97dd9c559432",
        "gender": "F",
        "age": 64,
        "longitude": "0.1869567",
        "rate": 12.98,
        "latitude": "51.60608253"
    },
    {
        "uuid": "b85adfad-9a76-44ee-8cb6-4737f8cb3c0b",
        "gender": "F",
        "age": 69,
        "longitude": "-0.58292163",
        "rate": 12.55,
        "latitude": "51.57439172"
    },
    {
        "uuid": "7fa2fe5f-0dc8-4bd6-9cb3-6fb2989cd30f",
        "gender": "F",
        "age": 32,
        "longitude": "-0.50110269",
        "rate": 29.65,
        "latitude": "51.74914859"
    },
    {
        "uuid": "a32b19b1-7e84-4bfd-b8fc-909c95a578c2",
        "gender": "M",
        "age": 38,
        "longitude": "-0.27667628",
        "rate": 29.25,
        "latitude": "51.55181108"
    },
    {
        "uuid": "c174217f-6c2d-44b1-aad3-5be0e3b36f05",
        "gender": "M",
        "age": 36,
        "longitude": "-0.00590573",
        "rate": 32.84,
        "latitude": "51.85036288"
    },
    {
        "uuid": "9a8be338-7d56-4860-b610-41da5a9b2b3a",
        "gender": "M",
        "age": 36,
        "longitude": "-0.07193068",
        "rate": 34.62,
        "latitude": "51.41688347"
    },
    {
        "uuid": "bbd337b4-0f48-4293-a712-f2f5fa6649ad",
        "gender": "M",
        "age": 45,
        "longitude": "-0.1098934",
        "rate": 22.57,
        "latitude": "51.40908986"
    },
    {
        "uuid": "774b3597-a965-444f-a9fe-4c47e07fd498",
        "gender": "M",
        "age": 17,
        "longitude": "0.13964293",
        "rate": 10.98,
        "latitude": "51.78060509"
    },
    {
        "uuid": "96a2e6b4-a43a-4b55-a195-4d648a7df6f3",
        "gender": "M",
        "age": 66,
        "longitude": "-0.50528983",
        "rate": 36.31,
        "latitude": "51.54822061"
    },
    {
        "uuid": "1014e075-f879-4062-b219-fb41ae9711d0",
        "gender": "M",
        "age": 63,
        "longitude": "-0.32719979",
        "rate": 13.73,
        "latitude": "51.57150918"
    },
    {
        "uuid": "3a39f2d2-5de0-45eb-a523-f0df049eee7c",
        "gender": "F",
        "age": 57,
        "longitude": "-0.21685074",
        "rate": 23.19,
        "latitude": "51.62341198"
    },
    {
        "uuid": "c9c4902e-68df-48f7-ab6d-a5b1455bc89c",
        "gender": "F",
        "age": 73,
        "longitude": "-0.29417004",
        "rate": 39.07,
        "latitude": "51.29788595"
    },
    {
        "uuid": "b45f4a1e-6ecf-4dc4-9e7f-f85867f5fad0",
        "gender": "F",
        "age": 23,
        "longitude": "0.00366519",
        "rate": 10.55,
        "latitude": "51.44761101"
    },
    {
        "uuid": "61ddcb49-c6a0-4892-b491-d6b31429469a",
        "gender": "F",
        "age": 27,
        "longitude": "0.01850154",
        "rate": 32.34,
        "latitude": "51.1937901"
    },
    {
        "uuid": "f652a554-7b7b-4cec-aea1-e60f5a46af77",
        "gender": "M",
        "age": 72,
        "longitude": "0.26697631",
        "rate": 30.06,
        "latitude": "51.59430388"
    },
    {
        "uuid": "548c10d0-61f3-486a-9cff-02bbedaeb4d9",
        "gender": "F",
        "age": 34,
        "longitude": "-0.04165512",
        "rate": 24.01,
        "latitude": "51.73493194"
    },
    {
        "uuid": "ac4379d5-18de-499d-bd41-ec41988387bd",
        "gender": "F",
        "age": 39,
        "longitude": "-0.26922531",
        "rate": 23.76,
        "latitude": "51.54840832"
    },
    {
        "uuid": "61a3eb1b-ebad-4ff8-aa4c-7499cd948854",
        "gender": "M",
        "age": 64,
        "longitude": "-0.55683828",
        "rate": 19.16,
        "latitude": "51.66418939"
    },
    {
        "uuid": "7df6fe8c-f824-4fe8-84d5-11d40511578e",
        "gender": "M",
        "age": 45,
        "longitude": "0.29535689",
        "rate": 12.7,
        "latitude": "51.54510707"
    },
    {
        "uuid": "d7f14f0d-55bc-442d-a8c7-5ee613a1d3b7",
        "gender": "M",
        "age": 47,
        "longitude": "0.23110053",
        "rate": 39.83,
        "latitude": "51.44493165"
    },
    {
        "uuid": "b23cb1ec-1809-4110-aa45-be458e82ad00",
        "gender": "F",
        "age": 58,
        "longitude": "-0.05420169",
        "rate": 18.17,
        "latitude": "51.82876385"
    },
    {
        "uuid": "22b49927-5ba7-4c12-8368-99bf9be7adde",
        "gender": "F",
        "age": 37,
        "longitude": "0.4034045",
        "rate": 25.96,
        "latitude": "51.61280733"
    },
    {
        "uuid": "aadee5b1-9f64-4a96-990c-f57d62f0c585",
        "gender": "M",
        "age": 37,
        "longitude": "-0.25795495",
        "rate": 18.28,
        "latitude": "51.3103919"
    },
    {
        "uuid": "e314d9df-9a35-416e-a7c3-ea8cedc2bb38",
        "gender": "M",
        "age": 25,
        "longitude": "0.29586949",
        "rate": 12.59,
        "latitude": "51.30366619"
    },
    {
        "uuid": "9ad2839c-1213-48f5-aea4-b2c8e074d2ce",
        "gender": "M",
        "age": 32,
        "longitude": "-0.67458774",
        "rate": 32.88,
        "latitude": "51.41363668"
    },
    {
        "uuid": "0e77b620-b7ea-4181-9249-e1ffe80b837c",
        "gender": "M",
        "age": 60,
        "longitude": "0.11617636",
        "rate": 37.63,
        "latitude": "51.69717676"
    },
    {
        "uuid": "afe3f731-e34d-4df6-90fa-c7eb75e06499",
        "gender": "F",
        "age": 59,
        "longitude": "-0.34109782",
        "rate": 37.58,
        "latitude": "51.58147944"
    },
    {
        "uuid": "829a31ed-dfd2-4869-8e6d-f4b6567fd4df",
        "gender": "F",
        "age": 52,
        "longitude": "0.11159564",
        "rate": 16.04,
        "latitude": "51.41722712"
    },
    {
        "uuid": "24475822-963b-4e65-a87a-e433a15a3394",
        "gender": "F",
        "age": 26,
        "longitude": "-0.12791891",
        "rate": 12.34,
        "latitude": "51.48899508"
    },
    {
        "uuid": "de5261b7-dd1b-49ae-999a-01cbbe2a023d",
        "gender": "F",
        "age": 62,
        "longitude": "0.15087705",
        "rate": 36.29,
        "latitude": "51.47097859"
    },
    {
        "uuid": "cacd170f-4855-4d91-aa21-d2f3f8634c07",
        "gender": "M",
        "age": 56,
        "longitude": "-0.29928322",
        "rate": 22.72,
        "latitude": "51.28306797"
    },
    {
        "uuid": "dc7f161b-7805-482f-a78b-dda458630b43",
        "gender": "F",
        "age": 45,
        "longitude": "-0.29289863",
        "rate": 37.0,
        "latitude": "51.43360766"
    },
    {
        "uuid": "0b77f831-d7f2-4abf-b6c7-6c2aad3748ce",
        "gender": "F",
        "age": 42,
        "longitude": "0.10836593",
        "rate": 28.81,
        "latitude": "51.51017682"
    },
    {
        "uuid": "7c257c1c-9558-4633-907f-45c6055448d3",
        "gender": "M",
        "age": 38,
        "longitude": "0.22357128",
        "rate": 33.12,
        "latitude": "51.35142769"
    },
    {
        "uuid": "20df59cf-7301-4aa7-ad14-dc00eb6a57a4",
        "gender": "F",
        "age": 61,
        "longitude": "0.06392669",
        "rate": 28.84,
        "latitude": "51.83941538"
    },
    {
        "uuid": "06d054df-c4f6-41dc-9869-6e575a0a4e9d",
        "gender": "F",
        "age": 39,
        "longitude": "0.38351198",
        "rate": 12.12,
        "latitude": "51.54422959"
    },
    {
        "uuid": "a2e7856e-53bc-4139-917f-46a334fa6f67",
        "gender": "F",
        "age": 62,
        "longitude": "-0.32302007",
        "rate": 29.38,
        "latitude": "51.17678384"
    },
    {
        "uuid": "862f14bb-ec1b-4bd6-81d7-eee2841fe5a2",
        "gender": "F",
        "age": 34,
        "longitude": "0.39326345",
        "rate": 18.91,
        "latitude": "51.40854511"
    },
    {
        "uuid": "e39f0be1-9cbb-4f7f-8859-5648a484dd9b",
        "gender": "M",
        "age": 74,
        "longitude": "0.10579417",
        "rate": 11.19,
        "latitude": "51.81615676"
    },
    {
        "uuid": "d22f640d-154d-45b4-b26b-d081dbceb2a2",
        "gender": "F",
        "age": 52,
        "longitude": "-0.30039328",
        "rate": 35.77,
        "latitude": "51.53674393"
    },
    {
        "uuid": "146c073a-a9c9-406f-99db-c16d0a5fcf4b",
        "gender": "M",
        "age": 28,
        "longitude": "-0.43064818",
        "rate": 39.97,
        "latitude": "51.30151789"
    },
    {
        "uuid": "fea729ad-d288-4fa7-9d96-e7339def178c",
        "gender": "M",
        "age": 60,
        "longitude": "-0.31286152",
        "rate": 29.74,
        "latitude": "51.59728919"
    },
    {
        "uuid": "4ce42653-6496-4a6d-8586-da8fe17802e0",
        "gender": "F",
        "age": 51,
        "longitude": "-0.32316156",
        "rate": 11.94,
        "latitude": "51.5857994"
    },
    {
        "uuid": "a296ab09-070c-45cb-a5ee-b9c80e0a77a0",
        "gender": "M",
        "age": 51,
        "longitude": "0.19411535",
        "rate": 36.88,
        "latitude": "51.25075947"
    },
    {
        "uuid": "49d33703-0d23-4e56-bbed-fb468dd4438a",
        "gender": "M",
        "age": 21,
        "longitude": "-0.23955536",
        "rate": 33.04,
        "latitude": "51.40070184"
    },
    {
        "uuid": "1c5ec18c-c93e-4a5a-9d31-b4e2f044ac7f",
        "gender": "M",
        "age": 33,
        "longitude": "0.15818093",
        "rate": 31.58,
        "latitude": "51.70756263"
    },
    {
        "uuid": "4e777445-5f2b-4b7b-8b1e-c0bd86c19bb3",
        "gender": "F",
        "age": 72,
        "longitude": "-0.25609859",
        "rate": 19.79,
        "latitude": "51.19207884"
    },
    {
        "uuid": "aa66c733-bdd4-47eb-8b26-0a26f75e18e1",
        "gender": "M",
        "age": 19,
        "longitude": "-0.63730644",
        "rate": 22.15,
        "latitude": "51.58050028"
    },
    {
        "uuid": "ea7e12cf-47fe-43d1-93d7-1870cf06c486",
        "gender": "M",
        "age": 51,
        "longitude": "0.33775123",
        "rate": 36.33,
        "latitude": "51.71356302"
    },
    {
        "uuid": "812ba9c5-a2a5-4bd5-ab82-f329a65ca4b4",
        "gender": "M",
        "age": 33,
        "longitude": "-0.03943818",
        "rate": 25.89,
        "latitude": "51.70412455"
    },
    {
        "uuid": "6c8ed59a-7aa1-4657-b050-a80f0acf4bd4",
        "gender": "F",
        "age": 66,
        "longitude": "-0.00504154",
        "rate": 10.47,
        "latitude": "51.69462553"
    },
    {
        "uuid": "1315a998-5b90-48db-a15a-b9a2c735950f",
        "gender": "M",
        "age": 19,
        "longitude": "0.24205811",
        "rate": 18.19,
        "latitude": "51.39799503"
    },
    {
        "uuid": "8d019131-a595-4e82-b157-afa10696c25a",
        "gender": "M",
        "age": 74,
        "longitude": "-0.14852806",
        "rate": 23.63,
        "latitude": "51.71484059"
    },
    {
        "uuid": "96ecfc83-428b-424c-ad98-a0e75fe8f43f",
        "gender": "M",
        "age": 69,
        "longitude": "-0.51286969",
        "rate": 27.72,
        "latitude": "51.54775254"
    },
    {
        "uuid": "fe89fa0e-7d84-4ee6-a1aa-0b3baac45dbd",
        "gender": "F",
        "age": 64,
        "longitude": "-0.04688636",
        "rate": 28.29,
        "latitude": "51.76306517"
    },
    {
        "uuid": "ced444a2-cb85-4d01-a7bc-3197d928a4ba",
        "gender": "F",
        "age": 62,
        "longitude": "0.13683922",
        "rate": 13.17,
        "latitude": "51.28398617"
    },
    {
        "uuid": "421ba2b9-2ac4-487f-a57a-471c4bf6ab96",
        "gender": "F",
        "age": 46,
        "longitude": "0.18181372",
        "rate": 31.13,
        "latitude": "51.32980143"
    },
    {
        "uuid": "5e530125-666d-48c1-98e8-a508681f7a49",
        "gender": "F",
        "age": 29,
        "longitude": "-0.21788563",
        "rate": 10.74,
        "latitude": "51.53028349"
    },
    {
        "uuid": "4b1fe6e3-e175-43ee-9a77-915dcbb82ca8",
        "gender": "F",
        "age": 42,
        "longitude": "0.11286427",
        "rate": 20.2,
        "latitude": "51.54660411"
    },
    {
        "uuid": "fe672470-104f-4d87-9d41-1fdec2ab2571",
        "gender": "F",
        "age": 71,
        "longitude": "-0.37265556",
        "rate": 32.81,
        "latitude": "51.50355591"
    },
    {
        "uuid": "d4b2e894-1c07-4ccf-8057-25c85b24dbf4",
        "gender": "M",
        "age": 59,
        "longitude": "-0.13947414",
        "rate": 19.61,
        "latitude": "51.6764678"
    },
    {
        "uuid": "b0b7e7c3-4a72-4eb2-822f-4fbee4b73fcb",
        "gender": "M",
        "age": 58,
        "longitude": "-0.04660205",
        "rate": 11.59,
        "latitude": "51.24874673"
    },
    {
        "uuid": "5fd12841-9512-4811-9f5c-fd4af0bdc7ca",
        "gender": "M",
        "age": 24,
        "longitude": "-0.55320252",
        "rate": 17.41,
        "latitude": "51.51107045"
    },
    {
        "uuid": "8f42b4ce-c878-4dc4-adf7-613212b3791f",
        "gender": "F",
        "age": 63,
        "longitude": "-0.15885384",
        "rate": 14.58,
        "latitude": "51.74224971"
    },
    {
        "uuid": "9c0eed6f-3637-4b59-8cfa-934d17cfb111",
        "gender": "M",
        "age": 71,
        "longitude": "-0.37413081",
        "rate": 33.05,
        "latitude": "51.58865413"
    },
    {
        "uuid": "40deb674-1099-4ad2-8231-6ab630892d23",
        "gender": "M",
        "age": 70,
        "longitude": "0.34493616",
        "rate": 25.25,
        "latitude": "51.46510646"
    },
    {
        "uuid": "4193c49e-b45e-4e96-8ef8-c258b53fad31",
        "gender": "M",
        "age": 64,
        "longitude": "-0.10230087",
        "rate": 15.2,
        "latitude": "51.66973417"
    },
    {
        "uuid": "9c22aa52-cd1a-48fd-a403-30dd483acf7c",
        "gender": "F",
        "age": 45,
        "longitude": "0.31523791",
        "rate": 16.85,
        "latitude": "51.44323557"
    },
    {
        "uuid": "a679e818-7ead-4a80-8676-a487611d0870",
        "gender": "M",
        "age": 43,
        "longitude": "-0.33033585",
        "rate": 32.03,
        "latitude": "51.37602298"
    },
    {
        "uuid": "be33b7fd-06c3-436f-bce3-5840c85adda5",
        "gender": "M",
        "age": 22,
        "longitude": "0.07798253",
        "rate": 11.3,
        "latitude": "51.66318604"
    },
    {
        "uuid": "bde56d2b-94d1-4d91-bac9-d586519fb108",
        "gender": "F",
        "age": 54,
        "longitude": "-0.49133569",
        "rate": 13.2,
        "latitude": "51.63217081"
    },
    {
        "uuid": "88837daf-cb6b-4b27-ad8d-8b802b30b55a",
        "gender": "F",
        "age": 58,
        "longitude": "-0.01463307",
        "rate": 32.11,
        "latitude": "51.67161811"
    },
    {
        "uuid": "fdcc32e9-5971-4212-a8bf-1a79553f1cbe",
        "gender": "F",
        "age": 20,
        "longitude": "0.38139903",
        "rate": 19.19,
        "latitude": "51.51731446"
    },
    {
        "uuid": "450320e0-7990-4944-946b-2968b56341a8",
        "gender": "F",
        "age": 74,
        "longitude": "0.2481438",
        "rate": 15.01,
        "latitude": "51.4122969"
    },
    {
        "uuid": "489a7edd-30f4-4637-b2c2-b31c57b0749b",
        "gender": "F",
        "age": 57,
        "longitude": "-0.0248265",
        "rate": 38.08,
        "latitude": "51.16297074"
    },
    {
        "uuid": "c44ee400-19bf-4e14-a161-d47ebff3d822",
        "gender": "M",
        "age": 31,
        "longitude": "-0.04809871",
        "rate": 35.29,
        "latitude": "51.71734806"
    },
    {
        "uuid": "5cacbaf2-b5d8-4464-a4d3-6aead61e0e86",
        "gender": "F",
        "age": 23,
        "longitude": "0.26950133",
        "rate": 13.15,
        "latitude": "51.74414942"
    },
    {
        "uuid": "9a0ed67b-8994-4a73-ab3f-e0aaf6e93409",
        "gender": "M",
        "age": 40,
        "longitude": "-0.04188906",
        "rate": 32.33,
        "latitude": "51.85278725"
    },
    {
        "uuid": "058a76a2-dc84-4f5c-823b-3fcc575eabfd",
        "gender": "M",
        "age": 43,
        "longitude": "-0.46798319",
        "rate": 38.72,
        "latitude": "51.46505504"
    },
    {
        "uuid": "0da06192-c330-4149-a09a-c89aa7465e78",
        "gender": "F",
        "age": 72,
        "longitude": "0.05611863",
        "rate": 12.07,
        "latitude": "51.72546629"
    },
    {
        "uuid": "ada855ef-defa-4cb0-9bd6-a2df5256aac6",
        "gender": "M",
        "age": 63,
        "longitude": "-0.07561608",
        "rate": 12.02,
        "latitude": "51.46572023"
    },
    {
        "uuid": "a75b547d-cec7-4665-8bdd-6f9f7d968b61",
        "gender": "M",
        "age": 53,
        "longitude": "-0.14232585",
        "rate": 13.63,
        "latitude": "51.30777297"
    },
    {
        "uuid": "d65f1314-19bc-4f82-9208-142702517658",
        "gender": "F",
        "age": 18,
        "longitude": "-0.29281872",
        "rate": 37.11,
        "latitude": "51.50963645"
    },
    {
        "uuid": "ee530f3a-e7f7-4bf5-b9bf-77cca6caefd2",
        "gender": "M",
        "age": 39,
        "longitude": "-0.50819053",
        "rate": 38.11,
        "latitude": "51.36036212"
    },
    {
        "uuid": "3fe556bc-592a-4b5d-ab07-d0f77c242abf",
        "gender": "M",
        "age": 40,
        "longitude": "-0.07810211",
        "rate": 31.32,
        "latitude": "51.27811912"
    },
    {
        "uuid": "f96de43e-8097-4e93-9e81-7f5e79c97648",
        "gender": "M",
        "age": 48,
        "longitude": "0.43676764",
        "rate": 35.74,
        "latitude": "51.55409175"
    },
    {
        "uuid": "26fab1d1-f96e-4004-ac05-c26dcffc32b7",
        "gender": "M",
        "age": 17,
        "longitude": "-0.36131978",
        "rate": 37.36,
        "latitude": "51.53025204"
    },
    {
        "uuid": "57315d62-6ea7-4ce4-964c-df5dbc721e86",
        "gender": "F",
        "age": 22,
        "longitude": "-0.320442",
        "rate": 25.41,
        "latitude": "51.6938279"
    },
    {
        "uuid": "65c95c85-bc0a-4351-b531-fbc27678c9f9",
        "gender": "F",
        "age": 60,
        "longitude": "0.15088223",
        "rate": 17.79,
        "latitude": "51.43750265"
    },
    {
        "uuid": "40ed1a60-def1-4d2f-855e-54fa62464d24",
        "gender": "M",
        "age": 68,
        "longitude": "-0.35237849",
        "rate": 18.09,
        "latitude": "51.687841"
    },
    {
        "uuid": "df34a161-df33-4803-9c37-c7ebbbf263c9",
        "gender": "M",
        "age": 47,
        "longitude": "-0.28091656",
        "rate": 10.59,
        "latitude": "51.32335064"
    },
    {
        "uuid": "84be5aa8-479f-454a-a314-610848167ef1",
        "gender": "M",
        "age": 67,
        "longitude": "-0.04078045",
        "rate": 18.24,
        "latitude": "51.36044986"
    },
    {
        "uuid": "e5ea16be-d7e3-477a-90d1-36e00229e7ad",
        "gender": "F",
        "age": 17,
        "longitude": "0.20557253",
        "rate": 26.34,
        "latitude": "51.27754086"
    },
    {
        "uuid": "652a1f12-7b3f-44ab-9f27-7da2c2c862c7",
        "gender": "M",
        "age": 50,
        "longitude": "-0.41023591",
        "rate": 37.31,
        "latitude": "51.55956851"
    },
    {
        "uuid": "55699c3d-5a79-41d2-a047-87629fdd3cea",
        "gender": "F",
        "age": 50,
        "longitude": "-0.11565128",
        "rate": 12.44,
        "latitude": "51.29460531"
    },
    {
        "uuid": "bcafa350-1776-4076-aa45-1f47998c4cd6",
        "gender": "M",
        "age": 46,
        "longitude": "-0.47007454",
        "rate": 16.59,
        "latitude": "51.26163697"
    },
    {
        "uuid": "4b657775-95ab-4dd0-919b-1d5d61c0a7a7",
        "gender": "F",
        "age": 60,
        "longitude": "0.43428591",
        "rate": 20.37,
        "latitude": "51.48803648"
    },
    {
        "uuid": "8911dfa3-25ef-4cc5-8c42-b712c1219632",
        "gender": "F",
        "age": 37,
        "longitude": "0.09645927",
        "rate": 21.93,
        "latitude": "51.77380912"
    },
    {
        "uuid": "bc488864-cbc5-430b-8a60-f5f2511194eb",
        "gender": "F",
        "age": 70,
        "longitude": "0.10033072",
        "rate": 14.68,
        "latitude": "51.18495601"
    },
    {
        "uuid": "3ac47377-84df-4fe2-9e0b-7032f0a889bc",
        "gender": "F",
        "age": 43,
        "longitude": "-0.33112134",
        "rate": 37.83,
        "latitude": "51.55477258"
    },
    {
        "uuid": "d24ff40e-535b-4c25-a2ac-77a7baeb6b29",
        "gender": "M",
        "age": 63,
        "longitude": "0.02447214",
        "rate": 23.24,
        "latitude": "51.4423135"
    },
    {
        "uuid": "4f74a6ed-4c64-4594-80f3-507b0dd20cc9",
        "gender": "M",
        "age": 44,
        "longitude": "-0.52402039",
        "rate": 11.1,
        "latitude": "51.654834"
    },
    {
        "uuid": "32ffce6e-dc15-4a45-845b-4af63dc383c5",
        "gender": "M",
        "age": 35,
        "longitude": "-0.37412605",
        "rate": 29.94,
        "latitude": "51.72922695"
    },
    {
        "uuid": "cbde007b-7211-4ca8-a9be-ac0937e5b755",
        "gender": "F",
        "age": 19,
        "longitude": "-0.50224089",
        "rate": 31.53,
        "latitude": "51.69519521"
    },
    {
        "uuid": "0108c832-6905-48a4-873f-5d7dc2880da5",
        "gender": "M",
        "age": 74,
        "longitude": "-0.12981175",
        "rate": 33.38,
        "latitude": "51.64854913"
    },
    {
        "uuid": "91058280-021c-49b0-a0af-9d05df1575f2",
        "gender": "M",
        "age": 25,
        "longitude": "0.37170427",
        "rate": 29.92,
        "latitude": "51.66361291"
    },
    {
        "uuid": "55c83765-0c83-4ddc-9d88-36223ca7327d",
        "gender": "F",
        "age": 54,
        "longitude": "0.14811759",
        "rate": 34.79,
        "latitude": "51.48957503"
    },
    {
        "uuid": "8988427a-3a0a-4b5b-ad48-be3b586ac065",
        "gender": "M",
        "age": 53,
        "longitude": "-0.38969325",
        "rate": 25.26,
        "latitude": "51.58625315"
    },
    {
        "uuid": "40e49b87-14e0-4499-991d-ff13cc82735f",
        "gender": "F",
        "age": 58,
        "longitude": "0.33073268",
        "rate": 23.81,
        "latitude": "51.48216528"
    },
    {
        "uuid": "1c989db4-34f4-4c47-8a00-12b392bd63b7",
        "gender": "M",
        "age": 56,
        "longitude": "-0.30480452",
        "rate": 32.53,
        "latitude": "51.22617177"
    },
    {
        "uuid": "a42b43a6-d44e-4f2f-8fd8-06d6690dbaab",
        "gender": "M",
        "age": 26,
        "longitude": "-0.48905624",
        "rate": 19.55,
        "latitude": "51.26389041"
    },
    {
        "uuid": "f81eb1ce-e99f-45e6-8a26-545c1ad110d2",
        "gender": "F",
        "age": 35,
        "longitude": "-0.42045084",
        "rate": 31.37,
        "latitude": "51.24702882"
    },
    {
        "uuid": "624dbbb6-b2f8-4fc0-9eb2-f8d01f8c9360",
        "gender": "F",
        "age": 65,
        "longitude": "-0.50548711",
        "rate": 32.76,
        "latitude": "51.6489306"
    },
    {
        "uuid": "a67634bd-faed-4019-a3e6-ec7d8c50336a",
        "gender": "M",
        "age": 40,
        "longitude": "0.11010913",
        "rate": 10.0,
        "latitude": "51.61659129"
    },
    {
        "uuid": "5aa3bd27-2218-4979-b947-b07222e022bc",
        "gender": "M",
        "age": 60,
        "longitude": "-0.05275632",
        "rate": 19.46,
        "latitude": "51.7264446"
    },
    {
        "uuid": "80bc816b-3fed-4dd2-bdf2-de40699a425d",
        "gender": "F",
        "age": 50,
        "longitude": "0.13694024",
        "rate": 22.93,
        "latitude": "51.59601482"
    },
    {
        "uuid": "4b9ec931-39ab-464b-8989-1fb20c7c2c55",
        "gender": "F",
        "age": 42,
        "longitude": "0.02765059",
        "rate": 29.94,
        "latitude": "51.7974288"
    },
    {
        "uuid": "a383066f-836a-4753-983c-a588d4b60037",
        "gender": "F",
        "age": 41,
        "longitude": "-0.23839095",
        "rate": 19.1,
        "latitude": "51.71285209"
    },
    {
        "uuid": "c59d1f7c-8b20-42c7-8d97-6679f071cc26",
        "gender": "M",
        "age": 42,
        "longitude": "0.0257393",
        "rate": 31.36,
        "latitude": "51.7656612"
    },
    {
        "uuid": "24f601e4-5203-44a6-b8a4-7c665e323f84",
        "gender": "F",
        "age": 35,
        "longitude": "-0.06055423",
        "rate": 39.65,
        "latitude": "51.2819911"
    },
    {
        "uuid": "43b71af3-2324-493d-b90c-69b552c11ee6",
        "gender": "M",
        "age": 40,
        "longitude": "-0.22240095",
        "rate": 16.39,
        "latitude": "51.70712946"
    },
    {
        "uuid": "4e329bac-4bb6-4e39-941b-f920522d0cfb",
        "gender": "M",
        "age": 71,
        "longitude": "-0.32776082",
        "rate": 19.61,
        "latitude": "51.80466803"
    },
    {
        "uuid": "f4a4dcff-1422-4658-aebc-4618a3915257",
        "gender": "M",
        "age": 59,
        "longitude": "-0.56201376",
        "rate": 24.04,
        "latitude": "51.40842626"
    },
    {
        "uuid": "029d88b5-5c06-4329-92de-6d2930bba9ce",
        "gender": "F",
        "age": 48,
        "longitude": "-0.01486659",
        "rate": 26.74,
        "latitude": "51.60985306"
    },
    {
        "uuid": "107a5e7a-fb76-4fb0-ad68-e2c5e8e72e7d",
        "gender": "F",
        "age": 17,
        "longitude": "-0.48195711",
        "rate": 21.16,
        "latitude": "51.58374457"
    },
    {
        "uuid": "8e77b07d-ced1-489e-b312-ff8dc4357ad4",
        "gender": "F",
        "age": 60,
        "longitude": "-0.18161728",
        "rate": 38.36,
        "latitude": "51.25422742"
    },
    {
        "uuid": "1a648416-6586-4349-a777-4e3dc318c69a",
        "gender": "M",
        "age": 67,
        "longitude": "0.29586775",
        "rate": 20.31,
        "latitude": "51.40596208"
    },
    {
        "uuid": "f50ec94c-77e8-4bff-9c4b-470bdb3b5f2f",
        "gender": "M",
        "age": 43,
        "longitude": "0.04393595",
        "rate": 14.02,
        "latitude": "51.32008704"
    },
    {
        "uuid": "93d073f1-b8e8-4680-9e34-d223545c91ee",
        "gender": "M",
        "age": 37,
        "longitude": "-0.1630859",
        "rate": 22.72,
        "latitude": "51.38567045"
    },
    {
        "uuid": "fd77f4ab-cfe5-4925-9d47-e004a60ae4b3",
        "gender": "M",
        "age": 37,
        "longitude": "-0.21684685",
        "rate": 17.54,
        "latitude": "51.78773037"
    },
    {
        "uuid": "d90a477c-4d27-40fe-ba78-98d33dced0f1",
        "gender": "M",
        "age": 57,
        "longitude": "0.15529419",
        "rate": 18.41,
        "latitude": "51.73771159"
    },
    {
        "uuid": "a67b27b7-b419-424f-84e5-1cd00fe041a5",
        "gender": "M",
        "age": 62,
        "longitude": "-0.58150013",
        "rate": 34.69,
        "latitude": "51.61984759"
    },
    {
        "uuid": "40004b5e-4832-4049-a8cf-fc0f5b097d9f",
        "gender": "F",
        "age": 47,
        "longitude": "-0.13607542",
        "rate": 26.84,
        "latitude": "51.76704677"
    },
    {
        "uuid": "417a0207-da17-4329-9eb2-c1a28b556596",
        "gender": "F",
        "age": 58,
        "longitude": "-0.47791738",
        "rate": 39.73,
        "latitude": "51.42545406"
    },
    {
        "uuid": "82b8abcd-baee-4ecb-827c-249d707d9840",
        "gender": "M",
        "age": 32,
        "longitude": "0.1131573",
        "rate": 30.0,
        "latitude": "51.57723026"
    },
    {
        "uuid": "65a0d230-fafe-430a-8396-153e28cf247f",
        "gender": "M",
        "age": 74,
        "longitude": "-0.0721292",
        "rate": 20.08,
        "latitude": "51.80483004"
    },
    {
        "uuid": "836b8121-cfda-4a20-a41b-6b9d3c2cb5a1",
        "gender": "F",
        "age": 57,
        "longitude": "0.10579442",
        "rate": 35.68,
        "latitude": "51.63720061"
    },
    {
        "uuid": "411506ba-a428-48bc-98a2-ad60722c4498",
        "gender": "M",
        "age": 44,
        "longitude": "-0.14843409",
        "rate": 34.16,
        "latitude": "51.20528965"
    },
    {
        "uuid": "542c98ff-87ee-48be-9642-40aa23f9927c",
        "gender": "M",
        "age": 64,
        "longitude": "-0.09278749",
        "rate": 20.67,
        "latitude": "51.49897676"
    },
    {
        "uuid": "630051aa-86c4-46a1-8efe-af9aa663442a",
        "gender": "F",
        "age": 73,
        "longitude": "-0.44470738",
        "rate": 16.3,
        "latitude": "51.76624431"
    },
    {
        "uuid": "e4a3bace-a57e-4512-9e82-d0d00b0887bb",
        "gender": "M",
        "age": 51,
        "longitude": "0.36451522",
        "rate": 27.43,
        "latitude": "51.56564346"
    },
    {
        "uuid": "42848235-ba93-45da-b07d-1440efa75a13",
        "gender": "F",
        "age": 46,
        "longitude": "0.22982709",
        "rate": 15.01,
        "latitude": "51.51960064"
    },
    {
        "uuid": "6d97d630-42af-4479-b3b5-0c1b79ebc503",
        "gender": "M",
        "age": 63,
        "longitude": "-0.30539307",
        "rate": 37.4,
        "latitude": "51.63407979"
    },
    {
        "uuid": "c38c1589-00d3-4c89-b4f7-c5cad59803a6",
        "gender": "M",
        "age": 54,
        "longitude": "0.063022",
        "rate": 14.96,
        "latitude": "51.80687628"
    },
    {
        "uuid": "919be226-9f33-486f-86b2-a405bc83cb64",
        "gender": "M",
        "age": 70,
        "longitude": "-0.26719516",
        "rate": 37.11,
        "latitude": "51.69537398"
    },
    {
        "uuid": "90e3e541-e942-4ce2-a510-6ab11204bf80",
        "gender": "M",
        "age": 21,
        "longitude": "0.10656596",
        "rate": 37.58,
        "latitude": "51.40705583"
    },
    {
        "uuid": "4da17f33-ac69-491f-bae3-85753e8781c2",
        "gender": "M",
        "age": 18,
        "longitude": "-0.40423617",
        "rate": 32.67,
        "latitude": "51.52613765"
    },
    {
        "uuid": "4a77443b-727e-4232-a446-6c72f19ec3d6",
        "gender": "M",
        "age": 29,
        "longitude": "0.21191266",
        "rate": 11.57,
        "latitude": "51.64313965"
    },
    {
        "uuid": "16b43738-175d-4f7d-ba2e-aeded5f64137",
        "gender": "M",
        "age": 46,
        "longitude": "-0.28667761",
        "rate": 23.26,
        "latitude": "51.76456291"
    },
    {
        "uuid": "71ee67a3-8c2e-44e1-bde9-0c12a24235d4",
        "gender": "F",
        "age": 37,
        "longitude": "0.30729742",
        "rate": 31.48,
        "latitude": "51.2902448"
    },
    {
        "uuid": "7faf76b3-a5ae-4624-a5cd-aafcb099fa74",
        "gender": "M",
        "age": 46,
        "longitude": "-0.1680143",
        "rate": 24.65,
        "latitude": "51.5424077"
    },
    {
        "uuid": "2a3622ce-bbff-4a9a-922f-33097d1d2db0",
        "gender": "F",
        "age": 59,
        "longitude": "-0.43135655",
        "rate": 23.06,
        "latitude": "51.59105322"
    },
    {
        "uuid": "b682198f-bdc5-47ed-9732-909ead660646",
        "gender": "F",
        "age": 40,
        "longitude": "0.03939072",
        "rate": 16.94,
        "latitude": "51.58860921"
    },
    {
        "uuid": "122fabef-3d90-4a7c-ae74-80eb38811b75",
        "gender": "M",
        "age": 42,
        "longitude": "-0.06159568",
        "rate": 34.76,
        "latitude": "51.47448428"
    },
    {
        "uuid": "05f4157d-4e76-4616-99e2-64fcae490d30",
        "gender": "F",
        "age": 36,
        "longitude": "-0.22124421",
        "rate": 29.3,
        "latitude": "51.82020133"
    },
    {
        "uuid": "edba2921-744d-4e73-a9ee-85eca1712bc6",
        "gender": "F",
        "age": 63,
        "longitude": "-0.02360125",
        "rate": 18.18,
        "latitude": "51.24463181"
    },
    {
        "uuid": "08536c0c-0f48-4380-9833-ac4657d35aff",
        "gender": "M",
        "age": 29,
        "longitude": "-0.36804247",
        "rate": 13.17,
        "latitude": "51.57708788"
    },
    {
        "uuid": "aa667ad4-a7d2-4c37-b420-30f984ff2b3e",
        "gender": "M",
        "age": 71,
        "longitude": "-0.44400852",
        "rate": 15.14,
        "latitude": "51.58093593"
    },
    {
        "uuid": "2b64b36a-1074-4fa9-abee-b2aa02f5f6da",
        "gender": "F",
        "age": 63,
        "longitude": "-0.06922084",
        "rate": 11.7,
        "latitude": "51.21258757"
    },
    {
        "uuid": "fdcc67c2-b196-4336-811a-e7fbdac12904",
        "gender": "F",
        "age": 34,
        "longitude": "-0.26754414",
        "rate": 25.39,
        "latitude": "51.29959239"
    },
    {
        "uuid": "d36a2fb1-dc43-434e-8ea2-28d701f5c699",
        "gender": "F",
        "age": 64,
        "longitude": "0.32915516",
        "rate": 27.5,
        "latitude": "51.38673027"
    },
    {
        "uuid": "008838f3-ee50-475b-b640-3f8848865799",
        "gender": "M",
        "age": 37,
        "longitude": "0.02201067",
        "rate": 38.81,
        "latitude": "51.40499261"
    },
    {
        "uuid": "cbdaf699-97ef-4047-aa8b-15aa0cbe2ad4",
        "gender": "M",
        "age": 37,
        "longitude": "-0.19823574",
        "rate": 11.39,
        "latitude": "51.76723746"
    },
    {
        "uuid": "388b9892-cbdd-4837-9ac3-3e4069518bb4",
        "gender": "F",
        "age": 54,
        "longitude": "-0.01031061",
        "rate": 32.38,
        "latitude": "51.81159104"
    },
    {
        "uuid": "0dbfa73e-bdac-4804-b76f-ef1cedea0cbb",
        "gender": "M",
        "age": 55,
        "longitude": "-0.09216501",
        "rate": 17.11,
        "latitude": "51.61162665"
    },
    {
        "uuid": "b1e9bdb4-62f3-492f-86a6-22a594bbb9bb",
        "gender": "M",
        "age": 16,
        "longitude": "-0.59192682",
        "rate": 37.69,
        "latitude": "51.38021358"
    },
    {
        "uuid": "3e468ed1-003c-4ed1-8003-a30d5268d40d",
        "gender": "F",
        "age": 54,
        "longitude": "0.36128855",
        "rate": 12.97,
        "latitude": "51.33336277"
    },
    {
        "uuid": "fc1d068e-e7c7-4e61-969c-da3dc97953cf",
        "gender": "F",
        "age": 26,
        "longitude": "-0.55731024",
        "rate": 27.37,
        "latitude": "51.59861624"
    },
    {
        "uuid": "7bb5f511-d2a0-4944-81cc-f1f2805b8685",
        "gender": "F",
        "age": 28,
        "longitude": "-0.58605003",
        "rate": 10.25,
        "latitude": "51.69493725"
    },
    {
        "uuid": "c938e3cc-4c72-4a8e-9e3c-ee5ac1a7aa51",
        "gender": "F",
        "age": 25,
        "longitude": "-0.22181214",
        "rate": 38.03,
        "latitude": "51.81250444"
    },
    {
        "uuid": "c7cbd26c-37fb-49f0-a5d7-ab9f3411136c",
        "gender": "M",
        "age": 19,
        "longitude": "0.14236641",
        "rate": 29.18,
        "latitude": "51.40125835"
    },
    {
        "uuid": "304f8add-3732-4d2f-9c7b-1eed6be34edc",
        "gender": "M",
        "age": 34,
        "longitude": "-0.62631209",
        "rate": 28.49,
        "latitude": "51.53805906"
    },
    {
        "uuid": "7068ded1-a617-41cf-b0c4-b8d4dabe2e52",
        "gender": "M",
        "age": 69,
        "longitude": "0.27691934",
        "rate": 22.39,
        "latitude": "51.66392174"
    },
    {
        "uuid": "a1870199-ffb1-4f4f-90e9-9324fa003f0a",
        "gender": "M",
        "age": 20,
        "longitude": "0.33548449",
        "rate": 34.34,
        "latitude": "51.49038277"
    },
    {
        "uuid": "2873d9cd-9e87-4300-8471-d476053cb3d6",
        "gender": "F",
        "age": 44,
        "longitude": "-0.22900747",
        "rate": 15.85,
        "latitude": "51.72636944"
    },
    {
        "uuid": "5f0d4ee6-30d3-45b6-b94e-cff693737da5",
        "gender": "M",
        "age": 40,
        "longitude": "-0.52544104",
        "rate": 26.87,
        "latitude": "51.46164734"
    },
    {
        "uuid": "99e759d4-988f-474c-a21c-e5d39d4462e0",
        "gender": "M",
        "age": 23,
        "longitude": "-0.02533059",
        "rate": 35.89,
        "latitude": "51.47166456"
    },
    {
        "uuid": "9584a5dc-0f60-4134-a71b-13fefa8a1811",
        "gender": "M",
        "age": 52,
        "longitude": "-0.09035448",
        "rate": 27.26,
        "latitude": "51.39985816"
    },
    {
        "uuid": "fc85338f-078d-4f6b-8bec-156425a18261",
        "gender": "M",
        "age": 21,
        "longitude": "-0.14816663",
        "rate": 36.41,
        "latitude": "51.83726246"
    },
    {
        "uuid": "7fed3df1-f127-4494-b2a2-466aca2b0bb5",
        "gender": "F",
        "age": 43,
        "longitude": "-0.37585182",
        "rate": 31.54,
        "latitude": "51.81919395"
    },
    {
        "uuid": "5d7ee44b-e568-4c8b-9e2d-3a5abbcaa7ee",
        "gender": "M",
        "age": 63,
        "longitude": "0.1429187",
        "rate": 24.52,
        "latitude": "51.77481598"
    },
    {
        "uuid": "136402b1-9c00-404b-9add-9355e96fd728",
        "gender": "F",
        "age": 61,
        "longitude": "0.08219892",
        "rate": 26.18,
        "latitude": "51.24296165"
    },
    {
        "uuid": "a1c3e08e-38e2-4363-96bc-f394db45dd63",
        "gender": "M",
        "age": 16,
        "longitude": "0.1472419",
        "rate": 17.19,
        "latitude": "51.65369793"
    },
    {
        "uuid": "5c4dec34-daca-418e-9935-4c47eabf57a9",
        "gender": "M",
        "age": 55,
        "longitude": "0.19093836",
        "rate": 20.14,
        "latitude": "51.33254864"
    },
    {
        "uuid": "8ac6c483-4c1e-493f-936d-41cbb06d0ce4",
        "gender": "F",
        "age": 63,
        "longitude": "0.0486867",
        "rate": 11.36,
        "latitude": "51.55846073"
    },
    {
        "uuid": "a0ff96b0-f777-485b-9c58-7cf9a9e23bf3",
        "gender": "F",
        "age": 40,
        "longitude": "-0.28860212",
        "rate": 17.0,
        "latitude": "51.79158269"
    },
    {
        "uuid": "66325afa-2ab3-4e79-ad35-71b899e8207e",
        "gender": "F",
        "age": 69,
        "longitude": "-0.09279936",
        "rate": 30.7,
        "latitude": "51.17583746"
    },
    {
        "uuid": "e9e2758f-c56a-43b9-acd2-a101a5a0e254",
        "gender": "F",
        "age": 73,
        "longitude": "-0.23104104",
        "rate": 22.15,
        "latitude": "51.6317735"
    },
    {
        "uuid": "d9af317b-004a-40ed-a095-68c1821142f8",
        "gender": "M",
        "age": 47,
        "longitude": "0.02677454",
        "rate": 10.93,
        "latitude": "51.16979467"
    },
    {
        "uuid": "6bb2dedc-b7dd-410c-91da-859839d95ac4",
        "gender": "F",
        "age": 21,
        "longitude": "0.05584907",
        "rate": 24.23,
        "latitude": "51.5022447"
    },
    {
        "uuid": "ccf5a329-9abd-470d-b3fe-d71cd851fbad",
        "gender": "F",
        "age": 35,
        "longitude": "0.05968717",
        "rate": 36.94,
        "latitude": "51.65781856"
    },
    {
        "uuid": "ea34e2c0-d246-4c32-ada7-285a086dc245",
        "gender": "M",
        "age": 68,
        "longitude": "-0.01002126",
        "rate": 33.89,
        "latitude": "51.82457341"
    },
    {
        "uuid": "7ffbae57-1208-4af2-b2f5-6ee0adca4f3f",
        "gender": "F",
        "age": 22,
        "longitude": "-0.12425321",
        "rate": 14.64,
        "latitude": "51.82810519"
    },
    {
        "uuid": "d4087934-711b-4e00-b69f-0953429b5a78",
        "gender": "F",
        "age": 72,
        "longitude": "-0.1334091",
        "rate": 27.18,
        "latitude": "51.17862671"
    },
    {
        "uuid": "bf73c1c6-efc5-44cb-b50b-423d7301eb0a",
        "gender": "F",
        "age": 49,
        "longitude": "0.24526329",
        "rate": 16.28,
        "latitude": "51.62020986"
    },
    {
        "uuid": "eca136e7-6ba5-4c00-8b33-26312cdec974",
        "gender": "M",
        "age": 25,
        "longitude": "-0.1163311",
        "rate": 10.6,
        "latitude": "51.43880446"
    },
    {
        "uuid": "22aba3b6-91fa-46de-b330-2190f8ecd6cc",
        "gender": "F",
        "age": 43,
        "longitude": "0.22737212",
        "rate": 22.01,
        "latitude": "51.71292326"
    },
    {
        "uuid": "dd6d392b-985d-4c2b-b394-3b4c970b57e8",
        "gender": "F",
        "age": 56,
        "longitude": "0.2208705",
        "rate": 27.8,
        "latitude": "51.69466907"
    },
    {
        "uuid": "d80871eb-5899-4e99-92d9-054429f30375",
        "gender": "F",
        "age": 32,
        "longitude": "-0.41848367",
        "rate": 28.32,
        "latitude": "51.63187781"
    },
    {
        "uuid": "47c813a5-5dff-43e4-91ff-c2888ba31d5e",
        "gender": "F",
        "age": 74,
        "longitude": "-0.00259817",
        "rate": 27.07,
        "latitude": "51.36669358"
    },
    {
        "uuid": "b1e46aa5-541a-48ca-946f-f28538dca79b",
        "gender": "M",
        "age": 53,
        "longitude": "0.30293206",
        "rate": 17.89,
        "latitude": "51.43149007"
    },
    {
        "uuid": "2825612b-71ac-4a6a-a2b7-8c6886836c0f",
        "gender": "F",
        "age": 43,
        "longitude": "0.2946276",
        "rate": 26.68,
        "latitude": "51.26943986"
    },
    {
        "uuid": "5521c9e1-3abd-4d92-9146-936aff6e7e9f",
        "gender": "F",
        "age": 47,
        "longitude": "-0.6831481",
        "rate": 30.95,
        "latitude": "51.60222128"
    },
    {
        "uuid": "c80be8ff-e00a-4bb7-a893-e3b78a64c10f",
        "gender": "F",
        "age": 40,
        "longitude": "-0.46223166",
        "rate": 39.85,
        "latitude": "51.61136499"
    },
    {
        "uuid": "deed1ce0-70cc-4c04-87eb-9d17de8e9683",
        "gender": "F",
        "age": 55,
        "longitude": "0.32232578",
        "rate": 17.15,
        "latitude": "51.54380954"
    },
    {
        "uuid": "7f0fde05-1b9c-48c2-bb60-ebae1fe846f6",
        "gender": "F",
        "age": 23,
        "longitude": "-0.10356446",
        "rate": 26.32,
        "latitude": "51.77499699"
    },
    {
        "uuid": "2a59f0f6-9f73-4668-ba45-af25736fbd94",
        "gender": "F",
        "age": 56,
        "longitude": "-0.01982705",
        "rate": 39.22,
        "latitude": "51.61946658"
    },
    {
        "uuid": "6830a7c7-b79d-4191-a7eb-4960e63d2a1e",
        "gender": "M",
        "age": 67,
        "longitude": "-0.15250043",
        "rate": 15.42,
        "latitude": "51.53635657"
    },
    {
        "uuid": "d14e317a-0329-42d6-8ca7-4d10002f568c",
        "gender": "F",
        "age": 25,
        "longitude": "-0.29678823",
        "rate": 28.99,
        "latitude": "51.6930405"
    },
    {
        "uuid": "6f434b1f-3eef-468c-a0c8-b4eb82191529",
        "gender": "M",
        "age": 37,
        "longitude": "0.16445309",
        "rate": 25.9,
        "latitude": "51.26377238"
    },
    {
        "uuid": "c25a41bd-d24e-4320-a85e-0a3ea99c9eb0",
        "gender": "M",
        "age": 69,
        "longitude": "-0.25021315",
        "rate": 25.84,
        "latitude": "51.74088443"
    },
    {
        "uuid": "98592aa0-5562-4ca9-adb6-8231f862b04c",
        "gender": "F",
        "age": 70,
        "longitude": "0.16208694",
        "rate": 24.86,
        "latitude": "51.44639421"
    },
    {
        "uuid": "85c166fb-abce-4277-887c-bb047a114d64",
        "gender": "F",
        "age": 50,
        "longitude": "0.12524775",
        "rate": 26.16,
        "latitude": "51.60207125"
    },
    {
        "uuid": "a85b3030-6e31-476e-8ea9-7158d77ee7ec",
        "gender": "F",
        "age": 58,
        "longitude": "0.28909383",
        "rate": 29.91,
        "latitude": "51.55953659"
    },
    {
        "uuid": "94656fc2-68f1-4722-9fbc-9397fdccc594",
        "gender": "M",
        "age": 67,
        "longitude": "-0.02112509",
        "rate": 14.43,
        "latitude": "51.38824383"
    },
    {
        "uuid": "4ad1957f-a393-4663-b93f-47e1babf4774",
        "gender": "M",
        "age": 18,
        "longitude": "-0.51637884",
        "rate": 19.71,
        "latitude": "51.49760994"
    },
    {
        "uuid": "439c83f3-98e4-4a8c-9622-e20acd46cb47",
        "gender": "M",
        "age": 46,
        "longitude": "-0.46730738",
        "rate": 22.86,
        "latitude": "51.66399323"
    },
    {
        "uuid": "ffe138e1-e6bd-46fa-bb04-19ce16742a86",
        "gender": "M",
        "age": 27,
        "longitude": "0.13830878",
        "rate": 24.19,
        "latitude": "51.27895843"
    },
    {
        "uuid": "728cd2ad-9d8b-4733-8975-798b8398b73f",
        "gender": "M",
        "age": 65,
        "longitude": "-0.06509774",
        "rate": 19.82,
        "latitude": "51.64669528"
    },
    {
        "uuid": "69f5c7a0-cd0d-4992-8314-0bd5d378c681",
        "gender": "M",
        "age": 53,
        "longitude": "-0.05438505",
        "rate": 12.99,
        "latitude": "51.82589073"
    },
    {
        "uuid": "47e26a29-2291-4446-9cba-ea18a69ddf4d",
        "gender": "M",
        "age": 67,
        "longitude": "0.09670179",
        "rate": 35.12,
        "latitude": "51.52768023"
    },
    {
        "uuid": "efaeb8ba-d225-497d-bafa-ec4046874fc6",
        "gender": "F",
        "age": 57,
        "longitude": "0.04089882",
        "rate": 24.87,
        "latitude": "51.23557888"
    },
    {
        "uuid": "e0ff2aef-b90a-4131-aabf-81e784af1cda",
        "gender": "M",
        "age": 63,
        "longitude": "0.08767566",
        "rate": 25.4,
        "latitude": "51.6656171"
    },
    {
        "uuid": "655c538d-2095-4fcf-b30e-26b0b53e0a78",
        "gender": "M",
        "age": 23,
        "longitude": "0.17862793",
        "rate": 39.92,
        "latitude": "51.62161107"
    },
    {
        "uuid": "1fd1eb92-1374-4184-a3e5-f77a9d0b1d34",
        "gender": "M",
        "age": 70,
        "longitude": "-0.22887869",
        "rate": 12.28,
        "latitude": "51.49785809"
    },
    {
        "uuid": "1a530d97-598d-43c1-82b7-75a3654a6a80",
        "gender": "F",
        "age": 43,
        "longitude": "-0.50973726",
        "rate": 38.02,
        "latitude": "51.58318101"
    },
    {
        "uuid": "2cc44824-f0d7-4e67-aca7-5c68e35fd2c4",
        "gender": "F",
        "age": 30,
        "longitude": "0.08930735",
        "rate": 16.67,
        "latitude": "51.81581904"
    },
    {
        "uuid": "76cd1038-a15f-41b4-96ce-cd663b880bd7",
        "gender": "F",
        "age": 33,
        "longitude": "-0.35430656",
        "rate": 34.38,
        "latitude": "51.82695976"
    },
    {
        "uuid": "b9e6997e-94b8-465c-8aa7-d892bbdb2a38",
        "gender": "F",
        "age": 37,
        "longitude": "0.21866199",
        "rate": 26.78,
        "latitude": "51.55813174"
    },
    {
        "uuid": "249a3087-032b-400b-8f97-717ba0ab9020",
        "gender": "M",
        "age": 62,
        "longitude": "0.00759596",
        "rate": 32.04,
        "latitude": "51.52033623"
    },
    {
        "uuid": "82d60d44-9a60-4ed4-81ab-8eaf047aa37c",
        "gender": "F",
        "age": 72,
        "longitude": "0.06492039",
        "rate": 24.47,
        "latitude": "51.83335711"
    },
    {
        "uuid": "a450cbe1-cfc1-4f64-8593-cc521c708b47",
        "gender": "M",
        "age": 59,
        "longitude": "-0.30242838",
        "rate": 38.9,
        "latitude": "51.19485331"
    },
    {
        "uuid": "9ae81de3-0c5d-4b96-8ac1-fb16a72263b5",
        "gender": "M",
        "age": 48,
        "longitude": "-0.53444447",
        "rate": 32.92,
        "latitude": "51.3303445"
    },
    {
        "uuid": "f55c63b7-e74d-494f-a586-399d65d5ab07",
        "gender": "M",
        "age": 43,
        "longitude": "0.2556848",
        "rate": 10.01,
        "latitude": "51.64548189"
    },
    {
        "uuid": "8c2fa9e4-2f2c-4580-8380-9534508ed4a9",
        "gender": "F",
        "age": 73,
        "longitude": "-0.49332972",
        "rate": 10.9,
        "latitude": "51.63066391"
    },
    {
        "uuid": "6bad4bf0-3bc3-4f0c-80ac-bd9a2915eb6b",
        "gender": "F",
        "age": 31,
        "longitude": "-0.26328552",
        "rate": 19.88,
        "latitude": "51.60320723"
    },
    {
        "uuid": "99cb9573-0227-4fb3-96d9-8760a90e2527",
        "gender": "F",
        "age": 55,
        "longitude": "-0.27055173",
        "rate": 20.2,
        "latitude": "51.32385685"
    },
    {
        "uuid": "1a6185b1-5e19-4a82-8970-59092769f236",
        "gender": "M",
        "age": 47,
        "longitude": "-0.49578597",
        "rate": 14.09,
        "latitude": "51.26469136"
    },
    {
        "uuid": "f9e66064-a8a6-4b23-907a-a803a6d7b1af",
        "gender": "M",
        "age": 67,
        "longitude": "0.18808781",
        "rate": 27.52,
        "latitude": "51.27580454"
    },
    {
        "uuid": "fb99345e-5cc7-4ee6-929f-bfdc138d000d",
        "gender": "M",
        "age": 40,
        "longitude": "-0.50458102",
        "rate": 26.11,
        "latitude": "51.23588268"
    },
    {
        "uuid": "293dd302-a64f-40d6-b958-e90422d42710",
        "gender": "M",
        "age": 31,
        "longitude": "-0.49743046",
        "rate": 30.17,
        "latitude": "51.64626688"
    },
    {
        "uuid": "455d97aa-c806-4d24-bb02-22e13789a5c6",
        "gender": "M",
        "age": 33,
        "longitude": "0.03600706",
        "rate": 31.19,
        "latitude": "51.69533127"
    },
    {
        "uuid": "c7276b78-4b58-4ee8-a8e8-fb2d4d6aeb7e",
        "gender": "M",
        "age": 25,
        "longitude": "0.00744586",
        "rate": 19.68,
        "latitude": "51.61432154"
    },
    {
        "uuid": "bff2204e-02d8-4ec9-8f70-cbdf13773ad3",
        "gender": "M",
        "age": 23,
        "longitude": "0.20159552",
        "rate": 13.32,
        "latitude": "51.63837465"
    },
    {
        "uuid": "2c969cc1-ec26-42ce-b72c-49bcda599a61",
        "gender": "M",
        "age": 26,
        "longitude": "-0.1972903",
        "rate": 22.77,
        "latitude": "51.44923299"
    },
    {
        "uuid": "a841356d-36cd-4b5f-8ec1-70a8f9906433",
        "gender": "F",
        "age": 50,
        "longitude": "0.14093433",
        "rate": 18.65,
        "latitude": "51.24505785"
    },
    {
        "uuid": "c9c01de6-34c3-48ee-b3ec-9942fab49ca4",
        "gender": "M",
        "age": 17,
        "longitude": "0.43790421",
        "rate": 35.47,
        "latitude": "51.47562584"
    },
    {
        "uuid": "cd0d9d4e-1a66-44ba-b0a3-24415c0340ad",
        "gender": "F",
        "age": 70,
        "longitude": "0.31644368",
        "rate": 10.15,
        "latitude": "51.35332649"
    },
    {
        "uuid": "b825f701-1640-438e-a6f8-2355ddde2bc6",
        "gender": "F",
        "age": 30,
        "longitude": "-0.06725476",
        "rate": 33.43,
        "latitude": "51.32891597"
    },
    {
        "uuid": "92577e18-e23a-4762-ad3b-c440c0682100",
        "gender": "M",
        "age": 63,
        "longitude": "-0.59516184",
        "rate": 37.29,
        "latitude": "51.70424375"
    },
    {
        "uuid": "af48b0e3-1c2d-488c-b6a9-aec99a2ac3ee",
        "gender": "M",
        "age": 58,
        "longitude": "-0.08507015",
        "rate": 35.98,
        "latitude": "51.52302715"
    },
    {
        "uuid": "c84c7a8b-6468-4298-94b3-0fed4a396ca4",
        "gender": "M",
        "age": 63,
        "longitude": "-0.13923235",
        "rate": 29.17,
        "latitude": "51.56374789"
    },
    {
        "uuid": "0261aa3c-e41a-4fb2-ba78-e79a1bbfa9f6",
        "gender": "F",
        "age": 57,
        "longitude": "0.32029461",
        "rate": 28.36,
        "latitude": "51.6536398"
    },
    {
        "uuid": "39e5f165-04fd-416b-8828-bbf1d353efab",
        "gender": "F",
        "age": 17,
        "longitude": "0.07358415",
        "rate": 33.27,
        "latitude": "51.23348107"
    },
    {
        "uuid": "d5f0b7bf-0d2a-4ab5-9ec7-3c6dbf86f4c2",
        "gender": "F",
        "age": 40,
        "longitude": "0.33846603",
        "rate": 36.53,
        "latitude": "51.41159918"
    },
    {
        "uuid": "7c73b747-fcab-45a3-84cb-1ddbaa652c45",
        "gender": "F",
        "age": 36,
        "longitude": "0.33458563",
        "rate": 24.88,
        "latitude": "51.7055812"
    },
    {
        "uuid": "6a8933fd-f37f-4f19-8076-e6a53791cb6e",
        "gender": "M",
        "age": 74,
        "longitude": "0.1615556",
        "rate": 37.85,
        "latitude": "51.25721515"
    },
    {
        "uuid": "64b4c252-8d6d-4197-8a40-69b279eb5b10",
        "gender": "M",
        "age": 44,
        "longitude": "-0.26296855",
        "rate": 16.0,
        "latitude": "51.31075471"
    },
    {
        "uuid": "dc733967-9da3-4d3f-94b2-eaa57f0c1e02",
        "gender": "F",
        "age": 62,
        "longitude": "0.05749735",
        "rate": 12.95,
        "latitude": "51.51853781"
    },
    {
        "uuid": "4da64631-990d-4967-9b85-236e3ee16467",
        "gender": "F",
        "age": 33,
        "longitude": "-0.1066196",
        "rate": 15.08,
        "latitude": "51.19208817"
    },
    {
        "uuid": "4add8e70-72ee-4715-afe6-5be577c90a12",
        "gender": "M",
        "age": 39,
        "longitude": "-0.12096032",
        "rate": 31.73,
        "latitude": "51.45600569"
    },
    {
        "uuid": "dd620b91-e0f9-4d25-9929-c420934c7daa",
        "gender": "M",
        "age": 38,
        "longitude": "-0.16257686",
        "rate": 38.72,
        "latitude": "51.25839973"
    },
    {
        "uuid": "f6034e2c-0909-4bb2-a221-de738380d4b8",
        "gender": "F",
        "age": 69,
        "longitude": "0.31201273",
        "rate": 39.18,
        "latitude": "51.65894126"
    },
    {
        "uuid": "933cd5c0-827f-410a-a0b2-c09948992863",
        "gender": "M",
        "age": 44,
        "longitude": "-0.44494985",
        "rate": 12.12,
        "latitude": "51.78604272"
    },
    {
        "uuid": "68a93380-73d0-4424-ad81-1c9f50374eb6",
        "gender": "F",
        "age": 69,
        "longitude": "0.02931658",
        "rate": 12.03,
        "latitude": "51.60169199"
    },
    {
        "uuid": "f1e83977-3ce5-4358-84af-6c6ca7f8b8ae",
        "gender": "M",
        "age": 63,
        "longitude": "-0.04788535",
        "rate": 24.31,
        "latitude": "51.70746527"
    },
    {
        "uuid": "83959cb1-b90b-42b6-8f2c-3eb8fc1f3d4e",
        "gender": "F",
        "age": 70,
        "longitude": "0.24364902",
        "rate": 20.53,
        "latitude": "51.30885989"
    },
    {
        "uuid": "9c06395d-0f00-4ce8-a9d1-c4c68e6664bf",
        "gender": "F",
        "age": 73,
        "longitude": "-0.48914136",
        "rate": 19.48,
        "latitude": "51.45822015"
    },
    {
        "uuid": "0c9d6de0-e332-483f-adf0-79412baac700",
        "gender": "F",
        "age": 41,
        "longitude": "0.24847419",
        "rate": 35.89,
        "latitude": "51.26338542"
    },
    {
        "uuid": "9b8f50a1-e0ec-4550-bc4c-18f856c0d3bc",
        "gender": "F",
        "age": 41,
        "longitude": "-0.11147004",
        "rate": 26.29,
        "latitude": "51.31773634"
    },
    {
        "uuid": "9947d564-0d86-4678-948e-da827cdf85c4",
        "gender": "F",
        "age": 36,
        "longitude": "-0.53804297",
        "rate": 21.17,
        "latitude": "51.70676051"
    },
    {
        "uuid": "4647ed30-3254-485f-8488-16e41a4fea9a",
        "gender": "F",
        "age": 52,
        "longitude": "-0.46905692",
        "rate": 38.63,
        "latitude": "51.7654153"
    },
    {
        "uuid": "1ed9d81a-1ac2-4752-ba50-2f48828237ab",
        "gender": "F",
        "age": 29,
        "longitude": "-0.1804679",
        "rate": 28.67,
        "latitude": "51.28616032"
    },
    {
        "uuid": "a3e3a36a-35dd-4618-8e85-28c045f04f20",
        "gender": "F",
        "age": 33,
        "longitude": "-0.02058681",
        "rate": 12.47,
        "latitude": "51.83658742"
    },
    {
        "uuid": "ca153737-ebeb-45a1-93a4-1291d2502d16",
        "gender": "M",
        "age": 34,
        "longitude": "0.25340631",
        "rate": 27.98,
        "latitude": "51.5929252"
    },
    {
        "uuid": "d88cf1b5-4039-43ed-a460-f1201b003668",
        "gender": "F",
        "age": 61,
        "longitude": "-0.26093159",
        "rate": 11.07,
        "latitude": "51.8465794"
    },
    {
        "uuid": "a22ba300-eeac-40c4-9586-5cb60ceceba5",
        "gender": "F",
        "age": 36,
        "longitude": "-0.53782077",
        "rate": 17.88,
        "latitude": "51.28776658"
    },
    {
        "uuid": "67e6dc43-4ce1-4dc2-b48a-70875449a570",
        "gender": "M",
        "age": 46,
        "longitude": "-0.23551431",
        "rate": 17.58,
        "latitude": "51.5426322"
    },
    {
        "uuid": "11284696-fae5-4af0-a969-2b0bcedcb4d7",
        "gender": "F",
        "age": 65,
        "longitude": "0.0905777",
        "rate": 35.56,
        "latitude": "51.75222076"
    },
    {
        "uuid": "686ea087-a916-41bf-a9ab-84b31b8f6aec",
        "gender": "F",
        "age": 70,
        "longitude": "-0.64092929",
        "rate": 17.7,
        "latitude": "51.55502169"
    },
    {
        "uuid": "399ad2b2-31fa-4ae7-925a-90567d306018",
        "gender": "F",
        "age": 21,
        "longitude": "-0.40968574",
        "rate": 11.7,
        "latitude": "51.70005806"
    },
    {
        "uuid": "6212cc7c-66ec-451c-856e-983d885e62e7",
        "gender": "F",
        "age": 69,
        "longitude": "0.17864651",
        "rate": 37.49,
        "latitude": "51.3094729"
    },
    {
        "uuid": "b26dc91d-491d-400e-a527-476b80b7c6df",
        "gender": "F",
        "age": 18,
        "longitude": "0.20300768",
        "rate": 19.05,
        "latitude": "51.63951622"
    },
    {
        "uuid": "f1d271a0-4fbe-48f9-806e-eb48517802d9",
        "gender": "F",
        "age": 52,
        "longitude": "0.13236145",
        "rate": 19.24,
        "latitude": "51.51913142"
    },
    {
        "uuid": "2c8056c3-9664-4140-a8dd-ea6759d27e5f",
        "gender": "F",
        "age": 37,
        "longitude": "-0.50243903",
        "rate": 36.56,
        "latitude": "51.77328082"
    },
    {
        "uuid": "f3b8a73d-47ba-45c3-b819-007fae539f9d",
        "gender": "F",
        "age": 34,
        "longitude": "-0.03359513",
        "rate": 16.17,
        "latitude": "51.47441816"
    },
    {
        "uuid": "5eafe0d5-ceb2-453b-90e8-bf216cbe629f",
        "gender": "F",
        "age": 74,
        "longitude": "-0.00654167",
        "rate": 33.5,
        "latitude": "51.43640978"
    },
    {
        "uuid": "0b3da3d7-7e03-4dc2-9b39-6d1493086282",
        "gender": "M",
        "age": 49,
        "longitude": "-0.47222597",
        "rate": 30.65,
        "latitude": "51.27800062"
    },
    {
        "uuid": "38a30b95-57c2-4ce9-9522-925803dc14cc",
        "gender": "M",
        "age": 58,
        "longitude": "-0.54514828",
        "rate": 14.7,
        "latitude": "51.49380414"
    },
    {
        "uuid": "e6fe06ad-6008-491d-a733-de48e761aa47",
        "gender": "F",
        "age": 69,
        "longitude": "0.03435865",
        "rate": 35.69,
        "latitude": "51.27724614"
    },
    {
        "uuid": "5504f2ee-ad69-4e3b-8cbf-8268731e1c4b",
        "gender": "M",
        "age": 23,
        "longitude": "-0.3015621",
        "rate": 32.79,
        "latitude": "51.23911474"
    },
    {
        "uuid": "26f8ecf8-3b38-4138-a852-388824772f18",
        "gender": "M",
        "age": 33,
        "longitude": "-0.1100315",
        "rate": 29.71,
        "latitude": "51.51997636"
    },
    {
        "uuid": "e277eb4d-1754-4878-a131-4cfcfd844b93",
        "gender": "M",
        "age": 47,
        "longitude": "-0.07976581",
        "rate": 11.24,
        "latitude": "51.34754039"
    },
    {
        "uuid": "3997a84f-8d05-42a0-9f55-04887f8d9a84",
        "gender": "M",
        "age": 63,
        "longitude": "-0.11297229",
        "rate": 35.57,
        "latitude": "51.44401662"
    },
    {
        "uuid": "a17c90fe-6cdb-42b7-9a69-e904caff31a6",
        "gender": "M",
        "age": 35,
        "longitude": "0.21906465",
        "rate": 16.69,
        "latitude": "51.43266442"
    },
    {
        "uuid": "e41ae843-3df7-4c96-9f21-73ed809aec20",
        "gender": "F",
        "age": 23,
        "longitude": "-0.65895171",
        "rate": 15.27,
        "latitude": "51.40718073"
    },
    {
        "uuid": "293a8504-2c10-4696-9e56-a6d6409ebb5f",
        "gender": "F",
        "age": 62,
        "longitude": "-0.17702337",
        "rate": 31.66,
        "latitude": "51.84883215"
    },
    {
        "uuid": "c7c4298a-06c4-454b-bb10-ada9deb7171b",
        "gender": "M",
        "age": 72,
        "longitude": "0.20822129",
        "rate": 28.94,
        "latitude": "51.26819699"
    },
    {
        "uuid": "2535be76-3a09-4657-9477-667376323d43",
        "gender": "F",
        "age": 72,
        "longitude": "0.12009316",
        "rate": 23.82,
        "latitude": "51.73989504"
    },
    {
        "uuid": "ed1843e8-4d44-4969-bf8c-1ea650855cca",
        "gender": "F",
        "age": 73,
        "longitude": "-0.25755555",
        "rate": 34.0,
        "latitude": "51.32282644"
    },
    {
        "uuid": "be5d685a-bfe1-4103-870c-129058ec62af",
        "gender": "F",
        "age": 55,
        "longitude": "-0.36845373",
        "rate": 26.09,
        "latitude": "51.71991657"
    },
    {
        "uuid": "2b5b2fbd-9e97-4d06-8ed6-5524a81e2f56",
        "gender": "F",
        "age": 24,
        "longitude": "-0.59201001",
        "rate": 36.92,
        "latitude": "51.62866651"
    },
    {
        "uuid": "48dad376-324b-49b0-9546-c1c6677f4725",
        "gender": "M",
        "age": 47,
        "longitude": "0.02400427",
        "rate": 29.77,
        "latitude": "51.37193994"
    },
    {
        "uuid": "0efa07f9-fa49-4474-a294-2704c99ee7ab",
        "gender": "M",
        "age": 35,
        "longitude": "-0.14514876",
        "rate": 32.46,
        "latitude": "51.42975475"
    },
    {
        "uuid": "84e04344-6049-4b7d-aea7-4338e37d4714",
        "gender": "M",
        "age": 28,
        "longitude": "-0.63794358",
        "rate": 14.74,
        "latitude": "51.48281944"
    },
    {
        "uuid": "dabaa559-c200-4800-b274-64cd1b06a660",
        "gender": "F",
        "age": 16,
        "longitude": "-0.20449092",
        "rate": 35.74,
        "latitude": "51.56589831"
    },
    {
        "uuid": "10476f6f-b387-4b2e-88a6-84dffb94fc0c",
        "gender": "M",
        "age": 74,
        "longitude": "0.27499813",
        "rate": 30.37,
        "latitude": "51.5170286"
    },
    {
        "uuid": "a13d3f85-b5d1-4da2-84b5-1b51a8f42ae8",
        "gender": "M",
        "age": 24,
        "longitude": "-0.00801164",
        "rate": 22.23,
        "latitude": "51.48867338"
    },
    {
        "uuid": "f6cd3b69-fbac-47ea-9ef1-2e4942c9ecd1",
        "gender": "F",
        "age": 28,
        "longitude": "0.03721108",
        "rate": 21.26,
        "latitude": "51.44997334"
    },
    {
        "uuid": "23e5e51e-b297-46af-bc3b-2cf338fce333",
        "gender": "F",
        "age": 19,
        "longitude": "-0.20257211",
        "rate": 24.86,
        "latitude": "51.86140648"
    },
    {
        "uuid": "d5d74c60-77dc-4a10-8ef1-c23ad4a24371",
        "gender": "F",
        "age": 69,
        "longitude": "0.31206429",
        "rate": 31.71,
        "latitude": "51.59393865"
    },
    {
        "uuid": "aa1113ad-1075-4631-9d65-0a229e73429b",
        "gender": "M",
        "age": 48,
        "longitude": "-0.22827951",
        "rate": 38.61,
        "latitude": "51.21352514"
    },
    {
        "uuid": "f3d30ef8-e8bf-4899-9897-7e4633cf4e2e",
        "gender": "F",
        "age": 74,
        "longitude": "-0.25115503",
        "rate": 22.91,
        "latitude": "51.20836697"
    },
    {
        "uuid": "97c10e35-48ed-42c8-997c-33ba90c59b60",
        "gender": "F",
        "age": 68,
        "longitude": "-0.30907921",
        "rate": 25.99,
        "latitude": "51.31951191"
    },
    {
        "uuid": "20bde4d0-c7e7-43d5-a7d5-3d3e505c8f3f",
        "gender": "F",
        "age": 25,
        "longitude": "0.03640354",
        "rate": 22.48,
        "latitude": "51.60274103"
    },
    {
        "uuid": "8734c2f3-835b-484a-b540-8cb9cfe0ef9d",
        "gender": "F",
        "age": 32,
        "longitude": "-0.17165816",
        "rate": 18.13,
        "latitude": "51.84053229"
    },
    {
        "uuid": "aaae5d70-d1a4-4a02-b814-d9c1440de5fc",
        "gender": "M",
        "age": 46,
        "longitude": "-0.28693066",
        "rate": 13.96,
        "latitude": "51.17274061"
    },
    {
        "uuid": "9ad2ff8f-b75a-4493-a9ce-c42213da1a6c",
        "gender": "F",
        "age": 30,
        "longitude": "-0.62358364",
        "rate": 33.56,
        "latitude": "51.62309482"
    },
    {
        "uuid": "1604952a-9fb8-4713-bfc8-314be47c0091",
        "gender": "F",
        "age": 68,
        "longitude": "-0.25988966",
        "rate": 16.15,
        "latitude": "51.76548104"
    },
    {
        "uuid": "68f42092-ce81-4ccf-af04-0feccf39e687",
        "gender": "F",
        "age": 50,
        "longitude": "0.22649676",
        "rate": 39.96,
        "latitude": "51.74144931"
    },
    {
        "uuid": "13df8500-b2c0-46bf-a963-f3642b4c7dd3",
        "gender": "F",
        "age": 50,
        "longitude": "0.05349842",
        "rate": 25.9,
        "latitude": "51.46158899"
    },
    {
        "uuid": "4c9c0f0e-c2b6-41a7-a267-94d3bc45b663",
        "gender": "M",
        "age": 65,
        "longitude": "-0.39065443",
        "rate": 26.77,
        "latitude": "51.82043983"
    },
    {
        "uuid": "c5e13478-36d4-4e43-8169-c914d9e895c4",
        "gender": "F",
        "age": 40,
        "longitude": "0.35498679",
        "rate": 16.81,
        "latitude": "51.53911013"
    },
    {
        "uuid": "202fe5c8-86bb-4a47-8d9b-5c58ffa2f57d",
        "gender": "M",
        "age": 28,
        "longitude": "0.20211267",
        "rate": 10.02,
        "latitude": "51.69319709"
    },
    {
        "uuid": "19a043de-cf35-441e-8867-01fc0ebb675d",
        "gender": "F",
        "age": 30,
        "longitude": "-0.03899123",
        "rate": 35.61,
        "latitude": "51.85572367"
    },
    {
        "uuid": "939c7dff-a063-48b5-abd3-c05452971f7c",
        "gender": "M",
        "age": 59,
        "longitude": "-0.01155141",
        "rate": 30.26,
        "latitude": "51.8157268"
    },
    {
        "uuid": "c6235cf0-87f6-4675-880f-c2c01e3f0ffa",
        "gender": "F",
        "age": 24,
        "longitude": "-0.16418992",
        "rate": 36.25,
        "latitude": "51.21523063"
    },
    {
        "uuid": "cb5a2030-9822-4e1f-95ec-256b17eaf7e1",
        "gender": "F",
        "age": 18,
        "longitude": "0.44287279",
        "rate": 24.67,
        "latitude": "51.46455005"
    },
    {
        "uuid": "dd5b9cc5-f3e6-408f-bc10-de9987074a4d",
        "gender": "F",
        "age": 26,
        "longitude": "-0.26939018",
        "rate": 38.01,
        "latitude": "51.37824826"
    },
    {
        "uuid": "509da57b-79d9-4364-8603-6477b6d6b455",
        "gender": "F",
        "age": 25,
        "longitude": "-0.46993193",
        "rate": 26.54,
        "latitude": "51.70241497"
    },
    {
        "uuid": "29bc04ff-b818-412f-8bcb-ee4c9adb586c",
        "gender": "M",
        "age": 33,
        "longitude": "-0.17438319",
        "rate": 12.22,
        "latitude": "51.39335389"
    },
    {
        "uuid": "f7bad8e4-f781-41c1-ad16-a52878646ad6",
        "gender": "M",
        "age": 30,
        "longitude": "-0.57460734",
        "rate": 30.41,
        "latitude": "51.41242166"
    },
    {
        "uuid": "60c66c23-874b-4835-987d-06dc9553026e",
        "gender": "F",
        "age": 71,
        "longitude": "-0.13950546",
        "rate": 33.44,
        "latitude": "51.29807037"
    },
    {
        "uuid": "7642fbac-5d22-42d1-8e7a-493967d100de",
        "gender": "M",
        "age": 61,
        "longitude": "0.20053289",
        "rate": 34.25,
        "latitude": "51.75107048"
    },
    {
        "uuid": "6d14d240-a74b-4536-98a6-3dd4ca7adbff",
        "gender": "F",
        "age": 50,
        "longitude": "-0.43247691",
        "rate": 35.48,
        "latitude": "51.72155686"
    },
    {
        "uuid": "421efda7-c5d1-4813-b994-fb2832e45bdf",
        "gender": "M",
        "age": 20,
        "longitude": "-0.09062544",
        "rate": 38.38,
        "latitude": "51.3035606"
    },
    {
        "uuid": "a82556ea-c94c-497b-a3c3-909cf12cbe31",
        "gender": "M",
        "age": 19,
        "longitude": "-0.40035756",
        "rate": 14.3,
        "latitude": "51.26087242"
    },
    {
        "uuid": "78039781-8bf8-40cd-99d7-d74159ae2844",
        "gender": "M",
        "age": 18,
        "longitude": "-0.32805286",
        "rate": 23.85,
        "latitude": "51.80952926"
    },
    {
        "uuid": "3d35c136-80e7-4a06-9aa7-a4747478d72a",
        "gender": "M",
        "age": 46,
        "longitude": "-0.30440508",
        "rate": 26.85,
        "latitude": "51.36710817"
    },
    {
        "uuid": "853e6eea-fab3-44a9-8fba-44696defd01f",
        "gender": "F",
        "age": 36,
        "longitude": "0.05785123",
        "rate": 20.0,
        "latitude": "51.4057215"
    },
    {
        "uuid": "3dcbff3b-612a-4a24-9756-02ee17c0dac0",
        "gender": "F",
        "age": 63,
        "longitude": "-0.34503322",
        "rate": 29.17,
        "latitude": "51.32420758"
    },
    {
        "uuid": "931a3e2e-5074-49b5-b5d8-1a05f499039e",
        "gender": "M",
        "age": 35,
        "longitude": "-0.26727199",
        "rate": 25.28,
        "latitude": "51.3584706"
    },
    {
        "uuid": "70ebadd9-cf91-4cf3-b993-43c45ac590e0",
        "gender": "F",
        "age": 44,
        "longitude": "-0.27907567",
        "rate": 22.29,
        "latitude": "51.65954032"
    },
    {
        "uuid": "723325c9-2d79-4afd-87c8-d76b36c4e79d",
        "gender": "M",
        "age": 37,
        "longitude": "0.15265583",
        "rate": 21.07,
        "latitude": "51.24827474"
    },
    {
        "uuid": "c1809137-b32b-47f6-b454-44a16ba887b5",
        "gender": "F",
        "age": 74,
        "longitude": "-0.11272547",
        "rate": 25.87,
        "latitude": "51.33127549"
    },
    {
        "uuid": "387329bc-2fa1-48a5-a503-2c8315785cb5",
        "gender": "M",
        "age": 60,
        "longitude": "0.07558987",
        "rate": 32.9,
        "latitude": "51.70334514"
    },
    {
        "uuid": "1a60cacb-587c-4b6f-b0cb-5849f7d87091",
        "gender": "F",
        "age": 40,
        "longitude": "-0.11462981",
        "rate": 27.43,
        "latitude": "51.57441041"
    },
    {
        "uuid": "759941f1-29dd-4141-ab44-f6d013c06edf",
        "gender": "F",
        "age": 31,
        "longitude": "-0.66184156",
        "rate": 33.01,
        "latitude": "51.38993749"
    },
    {
        "uuid": "00c1d924-a268-4746-b04b-0d51e37fc24a",
        "gender": "F",
        "age": 70,
        "longitude": "-0.28016337",
        "rate": 37.49,
        "latitude": "51.78728101"
    },
    {
        "uuid": "6013bf20-ca86-4c95-bf7d-680efe5d98e8",
        "gender": "M",
        "age": 25,
        "longitude": "-0.51641986",
        "rate": 36.69,
        "latitude": "51.25171314"
    },
    {
        "uuid": "6d6b1e82-a0b6-4cc5-916c-08c3a2cd911c",
        "gender": "M",
        "age": 28,
        "longitude": "-0.47664467",
        "rate": 33.49,
        "latitude": "51.31924906"
    },
    {
        "uuid": "db304a24-c962-49e4-b37a-e78496cd2f36",
        "gender": "M",
        "age": 50,
        "longitude": "-0.63452959",
        "rate": 39.72,
        "latitude": "51.35299026"
    },
    {
        "uuid": "7b6f6682-7e43-48a8-87b6-cab8d236c252",
        "gender": "M",
        "age": 18,
        "longitude": "-0.17282416",
        "rate": 19.43,
        "latitude": "51.38691668"
    },
    {
        "uuid": "b2e65277-bde9-4ada-a937-30d1e3af0c72",
        "gender": "F",
        "age": 49,
        "longitude": "-0.18696257",
        "rate": 29.53,
        "latitude": "51.65708513"
    },
    {
        "uuid": "c36a2e54-1ab7-4ae5-bed6-3432d3a40ea7",
        "gender": "F",
        "age": 57,
        "longitude": "-0.17478363",
        "rate": 16.64,
        "latitude": "51.51223775"
    },
    {
        "uuid": "89a12ba1-9fa9-4bbc-ad4d-b3fa64f28e0a",
        "gender": "F",
        "age": 68,
        "longitude": "-0.39994211",
        "rate": 22.83,
        "latitude": "51.55680221"
    },
    {
        "uuid": "493640f9-8319-4a33-b1db-9ad5aeacde74",
        "gender": "M",
        "age": 48,
        "longitude": "0.15509334",
        "rate": 12.02,
        "latitude": "51.304343"
    },
    {
        "uuid": "3888020e-53e7-48b0-a936-3912a486333b",
        "gender": "F",
        "age": 55,
        "longitude": "-0.07987141",
        "rate": 21.34,
        "latitude": "51.55371033"
    },
    {
        "uuid": "2dca751f-c4c2-4be5-8a8b-7eabae95584d",
        "gender": "F",
        "age": 34,
        "longitude": "-0.42121168",
        "rate": 39.41,
        "latitude": "51.59882892"
    },
    {
        "uuid": "6d9cce05-ed3e-496d-b9de-73ebc94cc091",
        "gender": "F",
        "age": 54,
        "longitude": "-0.167632",
        "rate": 10.29,
        "latitude": "51.1572903"
    },
    {
        "uuid": "4abcac52-a50d-411a-b302-06a9cb513f13",
        "gender": "M",
        "age": 38,
        "longitude": "0.03754781",
        "rate": 36.18,
        "latitude": "51.1690847"
    },
    {
        "uuid": "4cb2d0a1-7a4d-4d13-9da7-a8d75ca8d990",
        "gender": "F",
        "age": 46,
        "longitude": "-0.14204499",
        "rate": 35.63,
        "latitude": "51.53236552"
    },
    {
        "uuid": "1298916d-28ff-40e9-96ff-28dbbfd9b1b3",
        "gender": "F",
        "age": 29,
        "longitude": "0.11309774",
        "rate": 33.36,
        "latitude": "51.81579996"
    },
    {
        "uuid": "a480a276-de35-42ad-8003-478628d612de",
        "gender": "M",
        "age": 56,
        "longitude": "-0.29578377",
        "rate": 37.4,
        "latitude": "51.70227616"
    },
    {
        "uuid": "e1ea3ae6-9645-4590-a561-6ac01ffb46ac",
        "gender": "M",
        "age": 71,
        "longitude": "-0.31326765",
        "rate": 37.06,
        "latitude": "51.44997266"
    },
    {
        "uuid": "9d783649-ba73-4b78-8f62-03cbde20efc6",
        "gender": "M",
        "age": 74,
        "longitude": "-0.58645702",
        "rate": 16.45,
        "latitude": "51.53090722"
    },
    {
        "uuid": "33ae6205-7003-43f5-94e2-38153bf49110",
        "gender": "F",
        "age": 74,
        "longitude": "0.18108612",
        "rate": 12.4,
        "latitude": "51.66704987"
    },
    {
        "uuid": "e1f2a8fc-a429-40a1-9dbf-4440385e68bc",
        "gender": "M",
        "age": 47,
        "longitude": "-0.11031256",
        "rate": 32.61,
        "latitude": "51.4117213"
    },
    {
        "uuid": "3dee98fe-7495-49c7-81d1-d7691b13e314",
        "gender": "F",
        "age": 41,
        "longitude": "-0.43492303",
        "rate": 30.47,
        "latitude": "51.24085958"
    },
    {
        "uuid": "50b8a8d3-0623-4345-9dae-eff805f71588",
        "gender": "M",
        "age": 40,
        "longitude": "-0.46128629",
        "rate": 21.1,
        "latitude": "51.30874181"
    },
    {
        "uuid": "123a6077-b0cd-497a-80b1-aa74415b7cfa",
        "gender": "M",
        "age": 41,
        "longitude": "-0.15099869",
        "rate": 39.23,
        "latitude": "51.82991025"
    },
    {
        "uuid": "e5710cc8-52a3-4c71-841d-830f4cf536df",
        "gender": "M",
        "age": 18,
        "longitude": "-0.25532646",
        "rate": 32.01,
        "latitude": "51.38580409"
    },
    {
        "uuid": "8cd842a8-78af-485e-b25e-2eb3bb0869c4",
        "gender": "F",
        "age": 32,
        "longitude": "0.30518007",
        "rate": 22.57,
        "latitude": "51.49021117"
    },
    {
        "uuid": "17e79e73-6da2-4b2b-9775-f38f47a72a7a",
        "gender": "M",
        "age": 48,
        "longitude": "0.18884313",
        "rate": 20.63,
        "latitude": "51.76435265"
    },
    {
        "uuid": "51763188-c373-4115-9862-b86fb08d5e17",
        "gender": "F",
        "age": 28,
        "longitude": "-0.12094588",
        "rate": 34.65,
        "latitude": "51.45511372"
    },
    {
        "uuid": "118731e1-93e1-406e-9820-cd4ec1d0d37a",
        "gender": "F",
        "age": 59,
        "longitude": "0.03754743",
        "rate": 34.7,
        "latitude": "51.79182112"
    },
    {
        "uuid": "740a166b-fb14-4714-932e-1e071608b128",
        "gender": "M",
        "age": 69,
        "longitude": "-0.05280653",
        "rate": 25.28,
        "latitude": "51.40217339"
    },
    {
        "uuid": "fe9593ec-9fb8-4f65-a686-7d9c88115d8b",
        "gender": "F",
        "age": 50,
        "longitude": "0.02075226",
        "rate": 11.74,
        "latitude": "51.7082421"
    },
    {
        "uuid": "ed0d0181-ad3e-48d4-95e5-5b77da0aa81e",
        "gender": "M",
        "age": 40,
        "longitude": "-0.31223862",
        "rate": 27.19,
        "latitude": "51.39963538"
    },
    {
        "uuid": "a947d0c3-b8e1-49f9-94c1-ade5d15853ec",
        "gender": "F",
        "age": 45,
        "longitude": "-0.31768861",
        "rate": 22.32,
        "latitude": "51.41853951"
    },
    {
        "uuid": "0593219a-ab60-453a-941a-24c5971fe2d3",
        "gender": "M",
        "age": 52,
        "longitude": "-0.2368113",
        "rate": 33.32,
        "latitude": "51.21139762"
    },
    {
        "uuid": "f3b69de1-0b21-4357-9ecf-42d3833e86fc",
        "gender": "F",
        "age": 72,
        "longitude": "0.08815493",
        "rate": 32.35,
        "latitude": "51.59418866"
    },
    {
        "uuid": "031e3c59-b1df-483a-a962-db818fcafc58",
        "gender": "M",
        "age": 38,
        "longitude": "-0.08123983",
        "rate": 25.34,
        "latitude": "51.83826461"
    },
    {
        "uuid": "bbb8144d-f69f-44f8-ae2e-e32fd6359414",
        "gender": "M",
        "age": 32,
        "longitude": "0.19654014",
        "rate": 34.1,
        "latitude": "51.40377515"
    },
    {
        "uuid": "f7d4ab99-c5b3-4ae1-aea6-6ff4dbdff01d",
        "gender": "M",
        "age": 28,
        "longitude": "-0.64826351",
        "rate": 18.37,
        "latitude": "51.50583072"
    },
    {
        "uuid": "42673a60-9003-4c00-98e4-40b37407c887",
        "gender": "F",
        "age": 65,
        "longitude": "-0.01181323",
        "rate": 23.45,
        "latitude": "51.38202997"
    },
    {
        "uuid": "c020de72-e95b-4de4-8d32-bda65e478294",
        "gender": "M",
        "age": 21,
        "longitude": "0.11864192",
        "rate": 10.24,
        "latitude": "51.73799329"
    },
    {
        "uuid": "b9d6aeb5-2177-410e-ba4a-e7e14b1efa12",
        "gender": "F",
        "age": 57,
        "longitude": "-0.58661972",
        "rate": 30.52,
        "latitude": "51.59008023"
    },
    {
        "uuid": "b0a1a621-119b-4b23-93c2-0ca5ba0d9c98",
        "gender": "M",
        "age": 50,
        "longitude": "0.16054231",
        "rate": 29.08,
        "latitude": "51.57139065"
    },
    {
        "uuid": "1ffbad01-03fe-43de-a66a-224bfd3f352d",
        "gender": "M",
        "age": 23,
        "longitude": "0.00450764",
        "rate": 39.41,
        "latitude": "51.77418317"
    },
    {
        "uuid": "d55da585-238b-4a7b-a0e9-b75550618b55",
        "gender": "M",
        "age": 18,
        "longitude": "0.43252417",
        "rate": 13.69,
        "latitude": "51.47153742"
    },
    {
        "uuid": "d5dd98d9-4e44-4345-90aa-38c98bb6a58a",
        "gender": "F",
        "age": 52,
        "longitude": "-0.07452537",
        "rate": 29.08,
        "latitude": "51.20155975"
    },
    {
        "uuid": "5e9ce20c-e489-4525-95cf-0a247352a0be",
        "gender": "F",
        "age": 56,
        "longitude": "0.38841577",
        "rate": 37.79,
        "latitude": "51.58310195"
    },
    {
        "uuid": "839c558f-d617-42b2-b2e3-6bdc7cddda07",
        "gender": "M",
        "age": 67,
        "longitude": "0.1474658",
        "rate": 25.58,
        "latitude": "51.27681152"
    },
    {
        "uuid": "962bf0e8-95e6-4c9d-aec3-eb3d1db1809d",
        "gender": "F",
        "age": 57,
        "longitude": "-0.22386721",
        "rate": 27.0,
        "latitude": "51.64907503"
    },
    {
        "uuid": "678b7e2e-f8c6-487a-af6a-234a1c1e03af",
        "gender": "M",
        "age": 34,
        "longitude": "0.21005459",
        "rate": 13.04,
        "latitude": "51.72153564"
    },
    {
        "uuid": "5ba91fa2-dd01-43f2-80da-62aa40481ae0",
        "gender": "F",
        "age": 36,
        "longitude": "-0.0331469",
        "rate": 39.17,
        "latitude": "51.63057464"
    },
    {
        "uuid": "1dad3100-5b60-45f6-b9b2-0165821c0d01",
        "gender": "M",
        "age": 42,
        "longitude": "-0.26595261",
        "rate": 39.76,
        "latitude": "51.22036088"
    },
    {
        "uuid": "1fe8f007-e1c5-4148-a51f-e2cafb251e9a",
        "gender": "F",
        "age": 57,
        "longitude": "-0.09810188",
        "rate": 21.24,
        "latitude": "51.79714994"
    },
    {
        "uuid": "bccb9a84-98b4-4234-bc8c-284999d1a357",
        "gender": "M",
        "age": 20,
        "longitude": "-0.132361",
        "rate": 37.42,
        "latitude": "51.24074145"
    },
    {
        "uuid": "30a18c7a-b856-4458-8bef-ea52bde95cd9",
        "gender": "F",
        "age": 39,
        "longitude": "-0.47524729",
        "rate": 39.36,
        "latitude": "51.38194546"
    },
    {
        "uuid": "0d80733e-435a-44cc-8964-0bcb67b544ca",
        "gender": "F",
        "age": 70,
        "longitude": "0.21220683",
        "rate": 38.42,
        "latitude": "51.7088275"
    },
    {
        "uuid": "0d5d9177-a5ed-4573-83f5-3d15e294ddc4",
        "gender": "F",
        "age": 34,
        "longitude": "-0.13586584",
        "rate": 23.4,
        "latitude": "51.16496426"
    },
    {
        "uuid": "d7d39723-771e-44be-a7a6-4a99afe43d9b",
        "gender": "M",
        "age": 27,
        "longitude": "0.07423003",
        "rate": 21.6,
        "latitude": "51.71802378"
    },
    {
        "uuid": "e8b32cb4-0aeb-4df6-b318-6898ebeda4c3",
        "gender": "M",
        "age": 19,
        "longitude": "-0.05546942",
        "rate": 22.53,
        "latitude": "51.70063683"
    },
    {
        "uuid": "9385e644-2987-404a-801f-a52797f54d5c",
        "gender": "F",
        "age": 36,
        "longitude": "0.24054806",
        "rate": 26.4,
        "latitude": "51.4740497"
    },
    {
        "uuid": "fda17fdb-30bc-4102-848c-43be70449fb9",
        "gender": "M",
        "age": 69,
        "longitude": "0.35008934",
        "rate": 17.01,
        "latitude": "51.57142375"
    },
    {
        "uuid": "6c4af0bd-2817-49d6-8b2c-d617ef3a647d",
        "gender": "F",
        "age": 57,
        "longitude": "-0.30376834",
        "rate": 32.71,
        "latitude": "51.1674875"
    },
    {
        "uuid": "938fa0b1-d99d-44fb-a210-87a4569e44a3",
        "gender": "M",
        "age": 58,
        "longitude": "-0.67293192",
        "rate": 15.47,
        "latitude": "51.48059617"
    },
    {
        "uuid": "fd0ade80-6769-4955-839e-b5f03dacc805",
        "gender": "F",
        "age": 47,
        "longitude": "-0.60210191",
        "rate": 14.65,
        "latitude": "51.57584555"
    },
    {
        "uuid": "a80f1e4a-0691-4ee7-bbe5-260b2229d8ed",
        "gender": "F",
        "age": 69,
        "longitude": "-0.50888938",
        "rate": 38.1,
        "latitude": "51.3640752"
    },
    {
        "uuid": "447d1956-c367-46b6-833d-7c9ec1ff5513",
        "gender": "F",
        "age": 58,
        "longitude": "-0.07868031",
        "rate": 37.04,
        "latitude": "51.37506123"
    },
    {
        "uuid": "f3fdf1bb-4905-4b47-afb4-183eef8c9122",
        "gender": "M",
        "age": 71,
        "longitude": "0.1039162",
        "rate": 17.49,
        "latitude": "51.18637008"
    },
    {
        "uuid": "3b2b5efc-0968-4cdf-ac65-dcea27e6e6c7",
        "gender": "F",
        "age": 63,
        "longitude": "-0.23105168",
        "rate": 11.82,
        "latitude": "51.77238912"
    },
    {
        "uuid": "91234aa2-547c-40dc-9232-d9d3b29cbcb9",
        "gender": "F",
        "age": 16,
        "longitude": "-0.55681979",
        "rate": 38.62,
        "latitude": "51.40710287"
    },
    {
        "uuid": "318561b2-16b2-4244-b362-5783858a20cb",
        "gender": "M",
        "age": 62,
        "longitude": "-0.48931313",
        "rate": 11.24,
        "latitude": "51.27459365"
    },
    {
        "uuid": "aa7be381-bf3b-4287-baf3-d07cd30aa589",
        "gender": "M",
        "age": 39,
        "longitude": "0.41515089",
        "rate": 27.17,
        "latitude": "51.58013717"
    },
    {
        "uuid": "41950e75-8268-443d-89ed-97c4e0a5801a",
        "gender": "F",
        "age": 61,
        "longitude": "-0.50443836",
        "rate": 21.64,
        "latitude": "51.28812017"
    },
    {
        "uuid": "e4a5455b-69a3-4690-9f92-c5badd046244",
        "gender": "M",
        "age": 41,
        "longitude": "-0.09106707",
        "rate": 11.24,
        "latitude": "51.23086863"
    },
    {
        "uuid": "b27f3352-f781-4a6d-a2d8-d9b72d8dcb57",
        "gender": "M",
        "age": 74,
        "longitude": "-0.66950844",
        "rate": 38.66,
        "latitude": "51.61303735"
    },
    {
        "uuid": "87407cb5-51ee-49e0-96d6-641b0a2908e6",
        "gender": "F",
        "age": 67,
        "longitude": "-0.17900662",
        "rate": 20.14,
        "latitude": "51.34733869"
    },
    {
        "uuid": "3786bebe-aae1-4111-ba6f-7ff63b493ddc",
        "gender": "F",
        "age": 70,
        "longitude": "0.04389621",
        "rate": 19.61,
        "latitude": "51.42675512"
    },
    {
        "uuid": "036a46c0-66bc-418a-af7f-ab395a4a5b34",
        "gender": "M",
        "age": 68,
        "longitude": "-0.41862607",
        "rate": 13.5,
        "latitude": "51.74471186"
    },
    {
        "uuid": "f67736d1-4e07-4964-8e78-fd048494771d",
        "gender": "M",
        "age": 50,
        "longitude": "-0.3930693",
        "rate": 14.46,
        "latitude": "51.73119236"
    },
    {
        "uuid": "c7c2b6fe-78e0-4528-96ee-383d194d0454",
        "gender": "M",
        "age": 59,
        "longitude": "-0.63727491",
        "rate": 14.28,
        "latitude": "51.44941413"
    },
    {
        "uuid": "594e0b11-1c75-41e4-a9d3-e9c7e49cb571",
        "gender": "F",
        "age": 53,
        "longitude": "-0.35843766",
        "rate": 24.83,
        "latitude": "51.62922868"
    },
    {
        "uuid": "8cbf5b78-ce15-4873-a5c3-84b26868099b",
        "gender": "M",
        "age": 74,
        "longitude": "0.22121418",
        "rate": 15.45,
        "latitude": "51.44312581"
    },
    {
        "uuid": "e00304d1-9a08-42c4-a9f1-11c5c5d4aeef",
        "gender": "F",
        "age": 36,
        "longitude": "-0.52339191",
        "rate": 27.97,
        "latitude": "51.57806101"
    },
    {
        "uuid": "8b401847-e626-4f41-b381-ecff2350465f",
        "gender": "M",
        "age": 72,
        "longitude": "-0.25027278",
        "rate": 37.77,
        "latitude": "51.1783985"
    },
    {
        "uuid": "1f22b274-b844-4042-aa90-b1a314cfd6ed",
        "gender": "M",
        "age": 49,
        "longitude": "0.27578406",
        "rate": 34.27,
        "latitude": "51.67581037"
    },
    {
        "uuid": "b3ae7ceb-e042-427d-b37b-78c2dc46a78a",
        "gender": "F",
        "age": 17,
        "longitude": "0.08040093",
        "rate": 33.21,
        "latitude": "51.3623743"
    },
    {
        "uuid": "7e2b6bde-1f6c-440f-9be7-b3de5bf2ce6f",
        "gender": "F",
        "age": 28,
        "longitude": "0.10001916",
        "rate": 34.1,
        "latitude": "51.44016419"
    },
    {
        "uuid": "df50948c-d0cd-4b31-a1d3-3abcf87224f1",
        "gender": "M",
        "age": 58,
        "longitude": "0.13083594",
        "rate": 19.76,
        "latitude": "51.60058616"
    },
    {
        "uuid": "c5d01677-b364-4620-b24e-c28893d21858",
        "gender": "F",
        "age": 72,
        "longitude": "-0.26893168",
        "rate": 33.12,
        "latitude": "51.5623492"
    },
    {
        "uuid": "30a1beca-c5f3-4882-af3b-822d5d189e4c",
        "gender": "M",
        "age": 29,
        "longitude": "-0.54106958",
        "rate": 38.18,
        "latitude": "51.32521698"
    },
    {
        "uuid": "6d872c50-542e-42da-8f6b-3110fc5c32fd",
        "gender": "F",
        "age": 25,
        "longitude": "0.26722806",
        "rate": 22.35,
        "latitude": "51.59155967"
    },
    {
        "uuid": "dc189895-e1ae-4859-86f9-b2be97a2e0a0",
        "gender": "F",
        "age": 62,
        "longitude": "-0.18326405",
        "rate": 24.61,
        "latitude": "51.4683433"
    },
    {
        "uuid": "9ebf4106-9f40-4bc8-9c13-b6f397e04f12",
        "gender": "F",
        "age": 67,
        "longitude": "-0.47722424",
        "rate": 38.16,
        "latitude": "51.30680662"
    },
    {
        "uuid": "14dac124-6f11-4787-abc2-52c9a7ceca96",
        "gender": "M",
        "age": 30,
        "longitude": "-0.08210511",
        "rate": 21.99,
        "latitude": "51.44019556"
    },
    {
        "uuid": "5b18cc56-0e63-43b6-a682-4d52ae6c50c2",
        "gender": "F",
        "age": 65,
        "longitude": "-0.17712378",
        "rate": 38.44,
        "latitude": "51.54431635"
    },
    {
        "uuid": "116ebb3c-8764-4c0f-bbd7-56bb3ef33472",
        "gender": "F",
        "age": 19,
        "longitude": "-0.08834495",
        "rate": 15.82,
        "latitude": "51.25899864"
    },
    {
        "uuid": "7be9af03-22c7-47a7-a24a-ae88d55b9fb6",
        "gender": "M",
        "age": 48,
        "longitude": "0.30569422",
        "rate": 31.2,
        "latitude": "51.74026654"
    },
    {
        "uuid": "e3d67947-e668-4d69-af5b-2c07f7cb4f40",
        "gender": "F",
        "age": 25,
        "longitude": "-0.67533273",
        "rate": 23.52,
        "latitude": "51.5020687"
    },
    {
        "uuid": "93168d59-5ce3-4b7b-8dfb-35b1d3b7676d",
        "gender": "F",
        "age": 44,
        "longitude": "-0.53178157",
        "rate": 24.85,
        "latitude": "51.3020728"
    },
    {
        "uuid": "d36140d2-8fbc-4b58-9952-dd0737487888",
        "gender": "F",
        "age": 65,
        "longitude": "-0.05646388",
        "rate": 11.95,
        "latitude": "51.27095557"
    },
    {
        "uuid": "08ecbf77-6f5e-4eb3-86ab-fce707763990",
        "gender": "M",
        "age": 47,
        "longitude": "0.32745702",
        "rate": 15.03,
        "latitude": "51.48079455"
    },
    {
        "uuid": "369ddff2-8d4b-4644-aaf1-35f454117c61",
        "gender": "F",
        "age": 42,
        "longitude": "-0.02512672",
        "rate": 37.76,
        "latitude": "51.46473129"
    },
    {
        "uuid": "6c93c895-45b5-454a-a4ed-ea6ada53f82b",
        "gender": "M",
        "age": 18,
        "longitude": "0.33036724",
        "rate": 34.72,
        "latitude": "51.59948562"
    },
    {
        "uuid": "f7c650cc-cdaf-4bc7-a481-2544002875ee",
        "gender": "M",
        "age": 51,
        "longitude": "0.1890909",
        "rate": 36.32,
        "latitude": "51.62673999"
    },
    {
        "uuid": "1daaa7ed-e0be-4a14-a770-0bc9f3d526e4",
        "gender": "F",
        "age": 46,
        "longitude": "-0.19855357",
        "rate": 12.24,
        "latitude": "51.64689846"
    },
    {
        "uuid": "8354459c-dffe-400f-b5d7-ee6e55766d5f",
        "gender": "F",
        "age": 41,
        "longitude": "-0.21044643",
        "rate": 18.48,
        "latitude": "51.4897032"
    },
    {
        "uuid": "8770785f-0381-4c00-9394-3fd4262da820",
        "gender": "F",
        "age": 33,
        "longitude": "-0.19112874",
        "rate": 37.29,
        "latitude": "51.81070121"
    },
    {
        "uuid": "0542b156-c848-4534-b362-490cd20acce6",
        "gender": "F",
        "age": 74,
        "longitude": "-0.33522335",
        "rate": 14.99,
        "latitude": "51.84246855"
    },
    {
        "uuid": "51fa8673-afcf-462f-95b6-b1292f8a4c64",
        "gender": "F",
        "age": 42,
        "longitude": "-0.07680629",
        "rate": 11.09,
        "latitude": "51.71385868"
    },
    {
        "uuid": "b1c52db1-efaf-42bb-a46b-649a18c7edbb",
        "gender": "M",
        "age": 73,
        "longitude": "-0.1902309",
        "rate": 11.8,
        "latitude": "51.53267383"
    },
    {
        "uuid": "f87b08a3-c747-418e-bed7-d4527125c5fd",
        "gender": "M",
        "age": 70,
        "longitude": "-0.47211341",
        "rate": 13.78,
        "latitude": "51.39870887"
    },
    {
        "uuid": "7d298411-59d5-451a-9d6d-922baf56d19c",
        "gender": "F",
        "age": 45,
        "longitude": "-0.09831144",
        "rate": 34.39,
        "latitude": "51.56468544"
    },
    {
        "uuid": "4f7c6bfe-0508-4f4b-9fb6-e5d0974d7af4",
        "gender": "F",
        "age": 25,
        "longitude": "0.27892561",
        "rate": 18.28,
        "latitude": "51.28502088"
    },
    {
        "uuid": "e826522b-4781-44dc-a16d-b63898f5e5f9",
        "gender": "M",
        "age": 37,
        "longitude": "0.04239929",
        "rate": 25.84,
        "latitude": "51.50663224"
    },
    {
        "uuid": "715b2325-6281-4e71-960a-27a919b38a50",
        "gender": "F",
        "age": 17,
        "longitude": "-0.32177819",
        "rate": 16.25,
        "latitude": "51.25273356"
    },
    {
        "uuid": "d6ee7fa3-8c5e-496e-bd64-2325e9936283",
        "gender": "M",
        "age": 56,
        "longitude": "0.30714085",
        "rate": 17.5,
        "latitude": "51.70399612"
    },
    {
        "uuid": "1082c058-c4c9-4fbd-bc1f-dc490c7c365c",
        "gender": "F",
        "age": 74,
        "longitude": "-0.27143095",
        "rate": 14.51,
        "latitude": "51.50130371"
    },
    {
        "uuid": "8fd69852-566f-451e-a5a0-7df361fa51ea",
        "gender": "F",
        "age": 18,
        "longitude": "0.30990284",
        "rate": 16.04,
        "latitude": "51.5630724"
    },
    {
        "uuid": "1adba177-1b46-4e6b-8ae9-4dad4cf6479a",
        "gender": "M",
        "age": 18,
        "longitude": "0.02997675",
        "rate": 17.7,
        "latitude": "51.82915019"
    },
    {
        "uuid": "9fc099f1-9d2e-469a-baaf-c55ba071824a",
        "gender": "M",
        "age": 42,
        "longitude": "-0.31646801",
        "rate": 20.7,
        "latitude": "51.83279859"
    },
    {
        "uuid": "87bb9dc7-7bec-498d-a934-a593388ec4b5",
        "gender": "M",
        "age": 43,
        "longitude": "-0.27829558",
        "rate": 29.63,
        "latitude": "51.72227196"
    },
    {
        "uuid": "27953026-816e-4458-9edb-48f04a7498a4",
        "gender": "M",
        "age": 18,
        "longitude": "0.15496714",
        "rate": 31.7,
        "latitude": "51.21886691"
    },
    {
        "uuid": "7f0fdcca-dbd9-4038-b84f-eef166292ef8",
        "gender": "M",
        "age": 42,
        "longitude": "0.06371432",
        "rate": 27.04,
        "latitude": "51.84678103"
    },
    {
        "uuid": "e334fd30-fadb-4729-8b5e-c7e0d81c7c49",
        "gender": "F",
        "age": 33,
        "longitude": "-0.50613854",
        "rate": 31.9,
        "latitude": "51.36747119"
    },
    {
        "uuid": "6098d51a-3efd-4e5c-b48f-d71e3125ce56",
        "gender": "M",
        "age": 56,
        "longitude": "0.0136563",
        "rate": 32.34,
        "latitude": "51.73213804"
    },
    {
        "uuid": "af17a4b1-5d0d-48f3-b5c2-043204c9e6b5",
        "gender": "F",
        "age": 61,
        "longitude": "-0.28472152",
        "rate": 35.15,
        "latitude": "51.28661042"
    },
    {
        "uuid": "c1ced58c-a984-40d4-8a45-6d4faadc0ee5",
        "gender": "F",
        "age": 36,
        "longitude": "-0.22028749",
        "rate": 30.64,
        "latitude": "51.2613269"
    },
    {
        "uuid": "8e6aa6d6-a362-4d91-84e0-6b9b3f16db2c",
        "gender": "F",
        "age": 54,
        "longitude": "-0.09107459",
        "rate": 32.27,
        "latitude": "51.1895406"
    },
    {
        "uuid": "13db8a70-ce94-46ed-8b80-86fa11b7e8c2",
        "gender": "F",
        "age": 44,
        "longitude": "0.04985061",
        "rate": 33.28,
        "latitude": "51.5788835"
    },
    {
        "uuid": "66d52021-5ff3-4e77-ae25-744ae3952f89",
        "gender": "F",
        "age": 53,
        "longitude": "-0.07611284",
        "rate": 39.86,
        "latitude": "51.34378199"
    },
    {
        "uuid": "32faa545-69ee-458a-86b4-5b5fb46b0c2c",
        "gender": "M",
        "age": 44,
        "longitude": "0.111491",
        "rate": 39.25,
        "latitude": "51.76433806"
    },
    {
        "uuid": "95f00415-e6cd-4fd9-ac86-095b54b0d110",
        "gender": "F",
        "age": 48,
        "longitude": "0.07878745",
        "rate": 12.41,
        "latitude": "51.52742843"
    },
    {
        "uuid": "c3427b0d-1bb3-4d05-bd57-3fc286f2bfdf",
        "gender": "M",
        "age": 41,
        "longitude": "-0.17239892",
        "rate": 28.68,
        "latitude": "51.2125253"
    },
    {
        "uuid": "ea9ca0a6-a9f7-4146-a950-78b7055fc1b3",
        "gender": "M",
        "age": 69,
        "longitude": "-0.56872685",
        "rate": 21.61,
        "latitude": "51.45311956"
    },
    {
        "uuid": "5170ff44-a501-4986-95f7-7ddcac1a25ff",
        "gender": "F",
        "age": 61,
        "longitude": "0.32101104",
        "rate": 15.67,
        "latitude": "51.45399187"
    },
    {
        "uuid": "439db06c-9f5c-4777-a1a1-7b7585b076a2",
        "gender": "M",
        "age": 65,
        "longitude": "-0.3905314",
        "rate": 28.44,
        "latitude": "51.57945436"
    },
    {
        "uuid": "d578956e-7e9d-47f2-9976-1a4f04a82821",
        "gender": "M",
        "age": 68,
        "longitude": "0.38268558",
        "rate": 20.86,
        "latitude": "51.48476253"
    },
    {
        "uuid": "d5db2d3f-aae8-49e5-b6c6-18315e52a729",
        "gender": "F",
        "age": 51,
        "longitude": "-0.30676521",
        "rate": 22.33,
        "latitude": "51.74669992"
    },
    {
        "uuid": "44ec30f5-0c6c-4705-b921-3083ca3c459f",
        "gender": "M",
        "age": 23,
        "longitude": "-0.24603676",
        "rate": 19.37,
        "latitude": "51.27005598"
    },
    {
        "uuid": "1d8ad2d1-e5aa-4132-949e-7f1f1545654f",
        "gender": "M",
        "age": 52,
        "longitude": "-0.04863838",
        "rate": 27.44,
        "latitude": "51.21661758"
    },
    {
        "uuid": "d2916351-91b1-4b1d-881c-d1945167bd56",
        "gender": "M",
        "age": 20,
        "longitude": "0.14382949",
        "rate": 21.76,
        "latitude": "51.58436906"
    },
    {
        "uuid": "4eabc5e6-c008-4ff7-8f25-e1763efdb622",
        "gender": "F",
        "age": 33,
        "longitude": "0.25820074",
        "rate": 30.36,
        "latitude": "51.39218549"
    },
    {
        "uuid": "4d8c0e7e-bec3-4f1c-84a1-8f9f97bccfd3",
        "gender": "F",
        "age": 74,
        "longitude": "-0.08031787",
        "rate": 29.5,
        "latitude": "51.40358425"
    },
    {
        "uuid": "7aa1d861-b184-4924-9d5d-5c51a9327d20",
        "gender": "M",
        "age": 29,
        "longitude": "-0.17642561",
        "rate": 21.79,
        "latitude": "51.22125841"
    },
    {
        "uuid": "75700ec8-22d9-4b5d-bcb2-aa38ec89b1c0",
        "gender": "F",
        "age": 32,
        "longitude": "-0.59318845",
        "rate": 37.04,
        "latitude": "51.70537025"
    },
    {
        "uuid": "8720cbc4-d54e-4188-ae0d-0d53c63ccbc3",
        "gender": "M",
        "age": 58,
        "longitude": "-0.44367598",
        "rate": 22.8,
        "latitude": "51.7171012"
    },
    {
        "uuid": "4c9a5e74-7282-4cba-9a0b-a1e8d31d8f8a",
        "gender": "F",
        "age": 40,
        "longitude": "-0.19847414",
        "rate": 26.42,
        "latitude": "51.50845767"
    },
    {
        "uuid": "ef37188c-bbd4-44a7-8c56-7f101bbce5e9",
        "gender": "F",
        "age": 32,
        "longitude": "0.24371041",
        "rate": 37.48,
        "latitude": "51.51837091"
    },
    {
        "uuid": "afacaaaa-ecf5-470f-87c2-b75b3f239c70",
        "gender": "M",
        "age": 20,
        "longitude": "-0.05673534",
        "rate": 25.43,
        "latitude": "51.4082103"
    },
    {
        "uuid": "d2f50da8-3111-43c4-b10b-7f1988a88da8",
        "gender": "F",
        "age": 36,
        "longitude": "-0.31988968",
        "rate": 30.51,
        "latitude": "51.26077683"
    },
    {
        "uuid": "72107131-da75-4072-a7a6-c1399882745a",
        "gender": "F",
        "age": 61,
        "longitude": "-0.34612383",
        "rate": 14.2,
        "latitude": "51.41223749"
    },
    {
        "uuid": "e8e45ce6-4937-4075-a719-2b7ef48af0d8",
        "gender": "M",
        "age": 41,
        "longitude": "0.01278934",
        "rate": 14.14,
        "latitude": "51.43136685"
    },
    {
        "uuid": "b5771edd-0380-4957-91a6-326b4041f959",
        "gender": "F",
        "age": 74,
        "longitude": "-0.45643044",
        "rate": 36.84,
        "latitude": "51.75265015"
    },
    {
        "uuid": "5cd68f79-2b5f-4e32-b6e1-774272dbb163",
        "gender": "M",
        "age": 44,
        "longitude": "0.38068702",
        "rate": 17.01,
        "latitude": "51.54131367"
    },
    {
        "uuid": "6346413a-5e30-4ab8-b1d1-6d73e75fb423",
        "gender": "M",
        "age": 17,
        "longitude": "-0.0441718",
        "rate": 12.68,
        "latitude": "51.59728998"
    },
    {
        "uuid": "363b30e4-918c-4c5d-97a6-5a9000b90c6a",
        "gender": "F",
        "age": 28,
        "longitude": "-0.26536597",
        "rate": 36.1,
        "latitude": "51.58624503"
    },
    {
        "uuid": "04dba6ba-7b8a-4ed4-803d-0d4b8db2e2a5",
        "gender": "F",
        "age": 20,
        "longitude": "0.03215905",
        "rate": 26.73,
        "latitude": "51.47572299"
    },
    {
        "uuid": "fb0b5b7b-3963-4c24-8172-94ccf02fee32",
        "gender": "M",
        "age": 27,
        "longitude": "0.29045954",
        "rate": 19.46,
        "latitude": "51.732495"
    },
    {
        "uuid": "516efe66-2e7e-4386-8b12-645ed6c9f8ad",
        "gender": "M",
        "age": 35,
        "longitude": "-0.27730222",
        "rate": 38.28,
        "latitude": "51.78395914"
    },
    {
        "uuid": "51db7e77-fd1b-4f78-9d7a-33b9ed3e9809",
        "gender": "F",
        "age": 59,
        "longitude": "0.24834377",
        "rate": 33.16,
        "latitude": "51.36478091"
    },
    {
        "uuid": "39e26cc3-a572-4708-8489-237853f4af1b",
        "gender": "M",
        "age": 65,
        "longitude": "-0.37389001",
        "rate": 18.8,
        "latitude": "51.22920921"
    },
    {
        "uuid": "1b894ee3-0087-4b8f-92a4-fe8a8af016cc",
        "gender": "F",
        "age": 68,
        "longitude": "0.1842718",
        "rate": 12.64,
        "latitude": "51.22748178"
    },
    {
        "uuid": "c26b00bd-feef-4d21-b9a3-f4b6c28db264",
        "gender": "F",
        "age": 38,
        "longitude": "-0.22805839",
        "rate": 37.02,
        "latitude": "51.44562219"
    },
    {
        "uuid": "be24f194-20a0-4161-b30c-d156719c0a76",
        "gender": "F",
        "age": 51,
        "longitude": "0.00313258",
        "rate": 11.15,
        "latitude": "51.78716528"
    },
    {
        "uuid": "012b671b-54ca-443b-9b2f-298d42690c91",
        "gender": "M",
        "age": 74,
        "longitude": "-0.23251119",
        "rate": 31.4,
        "latitude": "51.6180567"
    },
    {
        "uuid": "bf3ff840-af26-4534-94c5-52c26a2b0025",
        "gender": "F",
        "age": 64,
        "longitude": "-0.22506376",
        "rate": 35.41,
        "latitude": "51.48559597"
    },
    {
        "uuid": "b829d56a-7f91-4a4e-8ecd-97ecf284a6dc",
        "gender": "M",
        "age": 59,
        "longitude": "0.2971477",
        "rate": 36.6,
        "latitude": "51.56740292"
    },
    {
        "uuid": "f878b34a-a240-4598-b3ac-69aebd1b7f7d",
        "gender": "F",
        "age": 45,
        "longitude": "-0.01523785",
        "rate": 37.44,
        "latitude": "51.36344402"
    },
    {
        "uuid": "89ee76ef-b857-4e7b-b7ef-9863a4ae591c",
        "gender": "M",
        "age": 27,
        "longitude": "-0.15602839",
        "rate": 14.07,
        "latitude": "51.16450146"
    },
    {
        "uuid": "6c4f7375-0001-42a0-8543-55f95af56d37",
        "gender": "M",
        "age": 31,
        "longitude": "-0.30803674",
        "rate": 24.33,
        "latitude": "51.64385883"
    },
    {
        "uuid": "fda98061-3ab3-4fa8-afef-7d4640590636",
        "gender": "M",
        "age": 72,
        "longitude": "0.40570993",
        "rate": 38.88,
        "latitude": "51.43274506"
    },
    {
        "uuid": "d4ab1eec-696c-4890-8083-2a4de24f56a7",
        "gender": "M",
        "age": 25,
        "longitude": "-0.47512013",
        "rate": 31.68,
        "latitude": "51.44039678"
    },
    {
        "uuid": "f03aa4bc-362f-48bb-bc11-05efef8a9ebb",
        "gender": "F",
        "age": 21,
        "longitude": "-0.34342663",
        "rate": 39.9,
        "latitude": "51.25424202"
    },
    {
        "uuid": "d6083fd7-5668-4b25-9049-6a523e4a0309",
        "gender": "M",
        "age": 37,
        "longitude": "-0.59503608",
        "rate": 26.72,
        "latitude": "51.3667628"
    },
    {
        "uuid": "0bb75e13-297d-42d4-9461-7a08d90e235a",
        "gender": "F",
        "age": 51,
        "longitude": "0.20143197",
        "rate": 12.33,
        "latitude": "51.66881594"
    },
    {
        "uuid": "8d5e3ae6-096f-4cdd-a183-e76a9c2b97de",
        "gender": "M",
        "age": 69,
        "longitude": "-0.53681104",
        "rate": 33.34,
        "latitude": "51.47755037"
    },
    {
        "uuid": "7be2d9a8-3a2f-4042-9abd-c56d1ea9294b",
        "gender": "F",
        "age": 65,
        "longitude": "-0.61216152",
        "rate": 16.69,
        "latitude": "51.41116004"
    },
    {
        "uuid": "5c15973e-27f1-4533-a080-36683b773440",
        "gender": "F",
        "age": 71,
        "longitude": "0.02238141",
        "rate": 15.05,
        "latitude": "51.4969519"
    },
    {
        "uuid": "914c76f4-f212-4c83-b18d-0c09239dd290",
        "gender": "M",
        "age": 24,
        "longitude": "-0.32719029",
        "rate": 13.02,
        "latitude": "51.59686781"
    },
    {
        "uuid": "beb219dd-90ec-4392-a8d7-c1e6a949fed8",
        "gender": "F",
        "age": 70,
        "longitude": "0.02356131",
        "rate": 17.76,
        "latitude": "51.28567677"
    },
    {
        "uuid": "661b0e6e-75c0-420c-afb2-b45c0f630671",
        "gender": "F",
        "age": 38,
        "longitude": "-0.34538547",
        "rate": 25.06,
        "latitude": "51.66437085"
    },
    {
        "uuid": "1e5fe1f7-e0d8-419a-a620-f212e61ee9b0",
        "gender": "M",
        "age": 32,
        "longitude": "-0.5470037",
        "rate": 33.02,
        "latitude": "51.29850529"
    },
    {
        "uuid": "dd98c73b-e603-4386-9714-7aa4270a7556",
        "gender": "M",
        "age": 22,
        "longitude": "-0.13996754",
        "rate": 18.61,
        "latitude": "51.18011057"
    },
    {
        "uuid": "f0fdbc50-0ffc-42bc-a6fc-3372b897ce31",
        "gender": "F",
        "age": 56,
        "longitude": "0.06261075",
        "rate": 21.2,
        "latitude": "51.44870983"
    },
    {
        "uuid": "52e3de8b-cea6-44f1-a94b-ae8a8b4a0713",
        "gender": "F",
        "age": 16,
        "longitude": "-0.11161986",
        "rate": 23.8,
        "latitude": "51.6447292"
    },
    {
        "uuid": "e48c0e48-6142-4524-9ec7-72bfe5d46526",
        "gender": "M",
        "age": 45,
        "longitude": "0.11803062",
        "rate": 20.06,
        "latitude": "51.79637546"
    },
    {
        "uuid": "b1e86239-a659-4f44-bd1d-573b798dca01",
        "gender": "F",
        "age": 36,
        "longitude": "-0.28292939",
        "rate": 25.93,
        "latitude": "51.2109179"
    },
    {
        "uuid": "bd2bdf69-b93f-4941-875f-a78bb9143af7",
        "gender": "M",
        "age": 59,
        "longitude": "-0.26612475",
        "rate": 26.73,
        "latitude": "51.80501938"
    },
    {
        "uuid": "7f2eb692-de00-4af3-bdce-d084f1dc7091",
        "gender": "M",
        "age": 47,
        "longitude": "-0.11223439",
        "rate": 11.25,
        "latitude": "51.20290457"
    },
    {
        "uuid": "2d27d3a2-8d57-4ebc-90fe-8796b33770d9",
        "gender": "M",
        "age": 50,
        "longitude": "-0.571758",
        "rate": 33.64,
        "latitude": "51.62565014"
    },
    {
        "uuid": "5530169a-0bd1-4d92-a26a-0e0dc5f86c73",
        "gender": "F",
        "age": 61,
        "longitude": "0.15278554",
        "rate": 12.02,
        "latitude": "51.72079495"
    },
    {
        "uuid": "77145920-bc19-4feb-94af-8c7a892ce250",
        "gender": "F",
        "age": 73,
        "longitude": "0.02791176",
        "rate": 39.22,
        "latitude": "51.34422829"
    },
    {
        "uuid": "06ea59b2-07c6-4960-8655-6df0680a5679",
        "gender": "F",
        "age": 49,
        "longitude": "0.19952757",
        "rate": 32.43,
        "latitude": "51.36837928"
    },
    {
        "uuid": "60697fbb-83f0-46d1-b39c-fdf39cdd6429",
        "gender": "F",
        "age": 48,
        "longitude": "0.13697959",
        "rate": 20.69,
        "latitude": "51.6312204"
    },
    {
        "uuid": "9899e366-8c09-490d-9502-d2ecd1f8eea1",
        "gender": "M",
        "age": 69,
        "longitude": "-0.29308192",
        "rate": 22.23,
        "latitude": "51.30643656"
    },
    {
        "uuid": "0daf5e96-b064-4b6e-b22c-7425ad8888d3",
        "gender": "F",
        "age": 50,
        "longitude": "-0.01779715",
        "rate": 17.36,
        "latitude": "51.62824706"
    },
    {
        "uuid": "28b74e7a-6abe-45bc-8752-abba33349ae0",
        "gender": "F",
        "age": 71,
        "longitude": "-0.28505345",
        "rate": 37.97,
        "latitude": "51.79790377"
    },
    {
        "uuid": "7ea9dffb-241f-44e4-803f-5a827f5029ab",
        "gender": "F",
        "age": 57,
        "longitude": "-0.01667327",
        "rate": 32.69,
        "latitude": "51.48729325"
    },
    {
        "uuid": "fccc77a3-4833-4509-970e-bbcf24d31c08",
        "gender": "M",
        "age": 47,
        "longitude": "-0.11032286",
        "rate": 39.45,
        "latitude": "51.63562617"
    },
    {
        "uuid": "e64e8667-c89a-420a-9de4-7696fafecc2f",
        "gender": "F",
        "age": 31,
        "longitude": "0.29300802",
        "rate": 14.87,
        "latitude": "51.40927002"
    },
    {
        "uuid": "aed2ec6d-99f0-4125-8788-cc615c84e252",
        "gender": "F",
        "age": 74,
        "longitude": "0.39287512",
        "rate": 26.34,
        "latitude": "51.523314"
    },
    {
        "uuid": "f9a0f237-9b3d-4f95-8880-9be43bc1c28f",
        "gender": "F",
        "age": 22,
        "longitude": "-0.48874196",
        "rate": 21.67,
        "latitude": "51.59448134"
    },
    {
        "uuid": "bcb592e2-2f0b-4c33-bc12-eae6fb32004c",
        "gender": "F",
        "age": 34,
        "longitude": "-0.0546526",
        "rate": 37.84,
        "latitude": "51.60549936"
    },
    {
        "uuid": "577242ec-6634-48dc-9a3f-11ae73a119ce",
        "gender": "M",
        "age": 69,
        "longitude": "-0.41694315",
        "rate": 23.63,
        "latitude": "51.52960145"
    },
    {
        "uuid": "b32f6ee2-1269-4b0b-9e08-f53a460da47f",
        "gender": "F",
        "age": 50,
        "longitude": "-0.00898608",
        "rate": 20.22,
        "latitude": "51.57573729"
    },
    {
        "uuid": "7ee65048-a818-46c8-af12-7bbf40b1d35c",
        "gender": "F",
        "age": 29,
        "longitude": "-0.10720953",
        "rate": 24.4,
        "latitude": "51.48383843"
    },
    {
        "uuid": "f93699ad-09c0-439b-8473-5b6f26780930",
        "gender": "F",
        "age": 16,
        "longitude": "-0.01753",
        "rate": 12.14,
        "latitude": "51.35132083"
    },
    {
        "uuid": "f3e33be6-ed53-419f-b058-ed7b3b490221",
        "gender": "M",
        "age": 37,
        "longitude": "-0.1847648",
        "rate": 10.83,
        "latitude": "51.46814036"
    },
    {
        "uuid": "41b42dbd-116a-4163-852d-cb4ad8901c3a",
        "gender": "M",
        "age": 63,
        "longitude": "0.33934487",
        "rate": 15.94,
        "latitude": "51.40350233"
    },
    {
        "uuid": "eb5039c6-fead-414b-8230-ac7c0e806fed",
        "gender": "M",
        "age": 64,
        "longitude": "-0.22716518",
        "rate": 34.24,
        "latitude": "51.18971912"
    },
    {
        "uuid": "3a4785e3-68a1-48aa-ab0f-8ddc2c7f7363",
        "gender": "M",
        "age": 65,
        "longitude": "0.06485299",
        "rate": 20.3,
        "latitude": "51.68076619"
    },
    {
        "uuid": "1c9d1e70-911a-4d41-a7df-c8c628e072c0",
        "gender": "F",
        "age": 69,
        "longitude": "-0.38150983",
        "rate": 15.78,
        "latitude": "51.42238057"
    },
    {
        "uuid": "03f63809-936a-4877-bc54-04bba70421a0",
        "gender": "M",
        "age": 65,
        "longitude": "-0.62660325",
        "rate": 18.59,
        "latitude": "51.60565051"
    },
    {
        "uuid": "716d2f2a-935e-41ca-a440-e58e51acb8cd",
        "gender": "M",
        "age": 71,
        "longitude": "-0.5065458",
        "rate": 16.72,
        "latitude": "51.56869292"
    },
    {
        "uuid": "1e1c00af-a89f-4a8d-9bc5-c1c65ab3a690",
        "gender": "M",
        "age": 24,
        "longitude": "-0.4285794",
        "rate": 10.9,
        "latitude": "51.72515725"
    },
    {
        "uuid": "9a01d652-17ca-4d35-873f-127f7e877c60",
        "gender": "M",
        "age": 66,
        "longitude": "0.36883273",
        "rate": 35.07,
        "latitude": "51.40847134"
    },
    {
        "uuid": "493dd604-9baa-4fac-868e-48de78835800",
        "gender": "F",
        "age": 42,
        "longitude": "-0.21224879",
        "rate": 25.86,
        "latitude": "51.78897423"
    },
    {
        "uuid": "1ce36f64-1665-4941-b968-cbe42e5d8594",
        "gender": "M",
        "age": 65,
        "longitude": "0.0322678",
        "rate": 27.89,
        "latitude": "51.16517184"
    },
    {
        "uuid": "09a72042-c134-43dc-b127-24714bc0cd0d",
        "gender": "M",
        "age": 51,
        "longitude": "-0.05407225",
        "rate": 27.62,
        "latitude": "51.58572679"
    },
    {
        "uuid": "0fb90ed5-4cdd-42b5-b277-a596273ac68f",
        "gender": "F",
        "age": 44,
        "longitude": "-0.51637993",
        "rate": 11.12,
        "latitude": "51.48053146"
    },
    {
        "uuid": "9e5c12c3-8c4f-4b2b-92f2-2659ed94d8fa",
        "gender": "M",
        "age": 38,
        "longitude": "-0.54926551",
        "rate": 15.73,
        "latitude": "51.45935905"
    },
    {
        "uuid": "2fcb3676-4b01-4bba-8c0f-00f050a95e8e",
        "gender": "M",
        "age": 57,
        "longitude": "-0.05587719",
        "rate": 26.16,
        "latitude": "51.37411238"
    },
    {
        "uuid": "c9e617ae-b8b5-4eae-8d11-5d4dc11f19ba",
        "gender": "M",
        "age": 73,
        "longitude": "0.01242673",
        "rate": 15.96,
        "latitude": "51.73780409"
    },
    {
        "uuid": "04badd87-cec6-47ce-a35d-296de1577199",
        "gender": "F",
        "age": 52,
        "longitude": "-0.30641746",
        "rate": 20.17,
        "latitude": "51.78495603"
    },
    {
        "uuid": "b2e5dd25-f07a-4425-a3b0-16cc7e1a43fb",
        "gender": "M",
        "age": 21,
        "longitude": "0.31476922",
        "rate": 30.07,
        "latitude": "51.73407586"
    },
    {
        "uuid": "e11289aa-e62b-4964-b3f9-7b92b1baec3a",
        "gender": "F",
        "age": 46,
        "longitude": "0.25523396",
        "rate": 23.89,
        "latitude": "51.3306277"
    },
    {
        "uuid": "a73d67d9-ffff-4b1d-a650-253fb982a827",
        "gender": "M",
        "age": 68,
        "longitude": "0.28966401",
        "rate": 37.68,
        "latitude": "51.52998136"
    },
    {
        "uuid": "461c3c07-8405-42e6-adae-3957790ee046",
        "gender": "M",
        "age": 41,
        "longitude": "0.38533461",
        "rate": 34.26,
        "latitude": "51.34585725"
    },
    {
        "uuid": "7c11d6ad-4112-4139-9eeb-ec4863ed945e",
        "gender": "M",
        "age": 44,
        "longitude": "-0.415817",
        "rate": 14.34,
        "latitude": "51.78912695"
    },
    {
        "uuid": "bbc307a8-fb07-4622-a6c4-4a92403878dc",
        "gender": "M",
        "age": 29,
        "longitude": "-0.32709797",
        "rate": 12.72,
        "latitude": "51.48619782"
    },
    {
        "uuid": "3564369d-3b44-43e4-b31a-e6d40ce67ceb",
        "gender": "F",
        "age": 16,
        "longitude": "-0.49870533",
        "rate": 14.43,
        "latitude": "51.74568526"
    },
    {
        "uuid": "8f51b009-524c-4bf5-a7f7-5de0485cef31",
        "gender": "M",
        "age": 33,
        "longitude": "-0.31762147",
        "rate": 33.62,
        "latitude": "51.59525522"
    },
    {
        "uuid": "2d10dd46-6a7b-4803-89e8-0ebf988ff169",
        "gender": "F",
        "age": 39,
        "longitude": "-0.02398711",
        "rate": 37.81,
        "latitude": "51.56205042"
    },
    {
        "uuid": "26f8739b-a01a-4b71-b372-e54f311d4ad4",
        "gender": "F",
        "age": 26,
        "longitude": "-0.07574407",
        "rate": 14.58,
        "latitude": "51.26131845"
    },
    {
        "uuid": "fd8c5e7f-92ab-429e-bdac-16e7dd504b9e",
        "gender": "M",
        "age": 30,
        "longitude": "0.15398746",
        "rate": 39.15,
        "latitude": "51.21816332"
    },
    {
        "uuid": "9a6a8c9b-5390-4b36-8d78-8ca6d43b2312",
        "gender": "F",
        "age": 53,
        "longitude": "-0.06894699",
        "rate": 12.46,
        "latitude": "51.45128606"
    },
    {
        "uuid": "5471206c-0eda-4e66-ad36-23c48eeacc5b",
        "gender": "M",
        "age": 73,
        "longitude": "-0.019855",
        "rate": 24.29,
        "latitude": "51.28016502"
    },
    {
        "uuid": "6645fe90-d251-490a-a51e-cad6f4baaaf6",
        "gender": "F",
        "age": 17,
        "longitude": "0.39551487",
        "rate": 29.04,
        "latitude": "51.52934242"
    },
    {
        "uuid": "180b72f1-4b93-43c8-aca8-36d5403109f7",
        "gender": "M",
        "age": 45,
        "longitude": "0.1783166",
        "rate": 23.47,
        "latitude": "51.37563637"
    },
    {
        "uuid": "562a092b-96df-4f12-a7e8-a717e1ecc56f",
        "gender": "M",
        "age": 70,
        "longitude": "0.06044841",
        "rate": 23.81,
        "latitude": "51.19319164"
    },
    {
        "uuid": "aa70c3ae-66b7-4436-aaac-920e240786ad",
        "gender": "M",
        "age": 25,
        "longitude": "-0.23714006",
        "rate": 16.04,
        "latitude": "51.24195984"
    },
    {
        "uuid": "0ebe331c-4633-4858-8e6a-30fc0c638c17",
        "gender": "F",
        "age": 51,
        "longitude": "-0.44277899",
        "rate": 16.08,
        "latitude": "51.66483164"
    },
    {
        "uuid": "4cdae610-da9d-4f88-9ca6-460801dcc849",
        "gender": "F",
        "age": 36,
        "longitude": "-0.1439409",
        "rate": 24.49,
        "latitude": "51.82320652"
    },
    {
        "uuid": "2c6bded3-1e9c-4da7-a7ec-0bab8095f126",
        "gender": "M",
        "age": 45,
        "longitude": "0.15859301",
        "rate": 32.86,
        "latitude": "51.51548541"
    },
    {
        "uuid": "2f5dd450-8f5e-4edd-905b-0aa2f1b1ca4d",
        "gender": "M",
        "age": 64,
        "longitude": "-0.01440483",
        "rate": 28.05,
        "latitude": "51.3035576"
    },
    {
        "uuid": "7eb1dfb7-76c7-4bc1-9dd6-c4e0c8772485",
        "gender": "M",
        "age": 48,
        "longitude": "-0.31319695",
        "rate": 36.71,
        "latitude": "51.27211951"
    },
    {
        "uuid": "6f0b8c52-8313-4182-a1b1-594be6b82c75",
        "gender": "M",
        "age": 33,
        "longitude": "-0.19018993",
        "rate": 34.27,
        "latitude": "51.38497128"
    },
    {
        "uuid": "d55a90cf-46e3-45d4-a7e0-fbbb04ca793c",
        "gender": "F",
        "age": 48,
        "longitude": "0.05352286",
        "rate": 10.3,
        "latitude": "51.39885015"
    },
    {
        "uuid": "3fccaea8-4155-4722-ad0d-05f103355df9",
        "gender": "M",
        "age": 68,
        "longitude": "0.32234667",
        "rate": 31.34,
        "latitude": "51.34335158"
    },
    {
        "uuid": "805f4d1d-545d-4ccf-b104-484867ea2872",
        "gender": "M",
        "age": 31,
        "longitude": "0.0125434",
        "rate": 37.52,
        "latitude": "51.23993736"
    },
    {
        "uuid": "d70644fe-dc8e-41ba-89d2-5c0a592ae721",
        "gender": "F",
        "age": 33,
        "longitude": "0.24270641",
        "rate": 34.37,
        "latitude": "51.56479757"
    },
    {
        "uuid": "057f7a8c-79aa-487c-9eb2-efcbc6991c53",
        "gender": "F",
        "age": 24,
        "longitude": "0.22365938",
        "rate": 23.15,
        "latitude": "51.74717317"
    },
    {
        "uuid": "027f914c-de7d-4a25-957c-1cdbf1fb8e73",
        "gender": "F",
        "age": 74,
        "longitude": "-0.14697252",
        "rate": 34.3,
        "latitude": "51.37779528"
    },
    {
        "uuid": "2641fc62-7c5b-495a-86c4-e51fa20e7591",
        "gender": "F",
        "age": 22,
        "longitude": "0.07973371",
        "rate": 29.49,
        "latitude": "51.72439643"
    },
    {
        "uuid": "976b5e88-a37a-4303-b418-0efd22cb0c4a",
        "gender": "M",
        "age": 40,
        "longitude": "0.12194168",
        "rate": 15.6,
        "latitude": "51.20627164"
    },
    {
        "uuid": "eff2cc82-fc05-4b9a-bb19-9517e3866989",
        "gender": "F",
        "age": 44,
        "longitude": "-0.151007",
        "rate": 25.14,
        "latitude": "51.83432144"
    },
    {
        "uuid": "cb787d8e-2542-492e-bbc3-604ef5aa59d5",
        "gender": "F",
        "age": 28,
        "longitude": "-0.31332728",
        "rate": 38.79,
        "latitude": "51.75907361"
    },
    {
        "uuid": "a19b88a8-d9c3-4854-88ae-ac65bf56aa17",
        "gender": "M",
        "age": 23,
        "longitude": "-0.62084309",
        "rate": 23.89,
        "latitude": "51.50220043"
    },
    {
        "uuid": "e39f4e40-08d1-4a48-9999-f9fefca694a4",
        "gender": "M",
        "age": 74,
        "longitude": "0.08096723",
        "rate": 11.55,
        "latitude": "51.17733081"
    },
    {
        "uuid": "e8559c5f-6103-4dfc-b498-1f7b9c136c35",
        "gender": "F",
        "age": 50,
        "longitude": "-0.44729262",
        "rate": 28.17,
        "latitude": "51.30875695"
    },
    {
        "uuid": "1619c619-393b-4bf0-82ec-301fcf8d73d2",
        "gender": "F",
        "age": 23,
        "longitude": "0.06208844",
        "rate": 15.04,
        "latitude": "51.20116761"
    },
    {
        "uuid": "2a646fd0-7991-4a33-88e4-45b0e5165d93",
        "gender": "M",
        "age": 63,
        "longitude": "0.06902117",
        "rate": 33.12,
        "latitude": "51.34132387"
    },
    {
        "uuid": "f19522bc-149a-4781-8b1e-c1f8dabf51f4",
        "gender": "M",
        "age": 43,
        "longitude": "-0.52822683",
        "rate": 23.21,
        "latitude": "51.47487306"
    },
    {
        "uuid": "841dd0e7-cffc-4803-a8f5-276160c23d5a",
        "gender": "M",
        "age": 38,
        "longitude": "-0.3735515",
        "rate": 26.35,
        "latitude": "51.24387562"
    },
    {
        "uuid": "e4f6813b-2b9b-4ac4-8ad8-7da816558a83",
        "gender": "M",
        "age": 61,
        "longitude": "-0.23893025",
        "rate": 16.8,
        "latitude": "51.19818904"
    },
    {
        "uuid": "f41ef0bb-4972-4a6f-94af-54048b05b7cf",
        "gender": "M",
        "age": 35,
        "longitude": "0.23847942",
        "rate": 30.83,
        "latitude": "51.45736827"
    },
    {
        "uuid": "7a61ab2f-10b5-4100-aefa-095790ca8a53",
        "gender": "M",
        "age": 47,
        "longitude": "-0.13988757",
        "rate": 11.05,
        "latitude": "51.6269183"
    },
    {
        "uuid": "d03b01ac-35d8-4ce0-978f-0ae51dcc8bf4",
        "gender": "M",
        "age": 73,
        "longitude": "-0.13850795",
        "rate": 38.86,
        "latitude": "51.54770221"
    },
    {
        "uuid": "1ad4789f-07f2-48b0-8ccb-b614cbb3b838",
        "gender": "M",
        "age": 73,
        "longitude": "-0.06497339",
        "rate": 14.26,
        "latitude": "51.46141771"
    },
    {
        "uuid": "bc1a08c8-4a8b-4245-bf2b-30f403d6a7e3",
        "gender": "M",
        "age": 45,
        "longitude": "-0.05370286",
        "rate": 35.6,
        "latitude": "51.66123781"
    },
    {
        "uuid": "678d94d8-c4eb-449f-ae82-4cbd4fd5f5d0",
        "gender": "F",
        "age": 67,
        "longitude": "-0.4739647",
        "rate": 21.43,
        "latitude": "51.50911515"
    },
    {
        "uuid": "f624c8e6-a5a6-4617-a9e9-cc2ce486be5f",
        "gender": "M",
        "age": 56,
        "longitude": "-0.53956029",
        "rate": 22.13,
        "latitude": "51.71110632"
    },
    {
        "uuid": "951804e0-0f00-4724-b81e-72bf86f37094",
        "gender": "M",
        "age": 48,
        "longitude": "0.27740268",
        "rate": 18.48,
        "latitude": "51.34676982"
    },
    {
        "uuid": "b11c76c9-cf87-4eae-89f1-a466839befc2",
        "gender": "M",
        "age": 44,
        "longitude": "-0.23613714",
        "rate": 31.32,
        "latitude": "51.21329814"
    },
    {
        "uuid": "ec7afbd9-faec-4e46-bcfd-de8706feaf59",
        "gender": "M",
        "age": 58,
        "longitude": "-0.24326258",
        "rate": 19.34,
        "latitude": "51.55587162"
    },
    {
        "uuid": "96e85f8b-2d1c-4b03-ae8e-fd9b04b00d5b",
        "gender": "M",
        "age": 33,
        "longitude": "-0.59400815",
        "rate": 12.97,
        "latitude": "51.64795599"
    },
    {
        "uuid": "155fe9fa-f98c-400a-a78a-0c2324361e9e",
        "gender": "M",
        "age": 26,
        "longitude": "0.3846973",
        "rate": 23.76,
        "latitude": "51.57592271"
    },
    {
        "uuid": "3a8de848-a383-4a5c-bc5b-893bf4873232",
        "gender": "M",
        "age": 59,
        "longitude": "-0.38781733",
        "rate": 35.48,
        "latitude": "51.53251835"
    },
    {
        "uuid": "80bc79f9-1e94-499f-be26-91cfebfcee92",
        "gender": "F",
        "age": 47,
        "longitude": "0.32916446",
        "rate": 37.39,
        "latitude": "51.56093673"
    },
    {
        "uuid": "a4be9d73-8bc1-428c-a768-0af68e459c37",
        "gender": "F",
        "age": 67,
        "longitude": "0.20318603",
        "rate": 35.59,
        "latitude": "51.49585545"
    },
    {
        "uuid": "2efdacd8-2c8f-4474-ba2a-55e19416e357",
        "gender": "M",
        "age": 20,
        "longitude": "0.18832144",
        "rate": 21.17,
        "latitude": "51.80396829"
    },
    {
        "uuid": "021ec92a-f0ca-4a6a-8497-4204d2c7dc26",
        "gender": "F",
        "age": 36,
        "longitude": "-0.41336962",
        "rate": 17.2,
        "latitude": "51.51032151"
    },
    {
        "uuid": "1cd45313-63e2-45f1-becf-cbed4f50b148",
        "gender": "M",
        "age": 30,
        "longitude": "-0.49813565",
        "rate": 10.74,
        "latitude": "51.76638153"
    },
    {
        "uuid": "4358a709-20bb-4995-8288-5c1c14afaf1e",
        "gender": "M",
        "age": 40,
        "longitude": "0.30125767",
        "rate": 26.74,
        "latitude": "51.66477899"
    },
    {
        "uuid": "afe904dc-e24e-48e7-a687-84eddbb63230",
        "gender": "M",
        "age": 48,
        "longitude": "0.13550257",
        "rate": 10.33,
        "latitude": "51.27324617"
    },
    {
        "uuid": "13097035-dc1c-435b-a505-79536f38d66d",
        "gender": "M",
        "age": 20,
        "longitude": "-0.09972582",
        "rate": 36.16,
        "latitude": "51.7789506"
    },
    {
        "uuid": "9f3d5e81-8c79-4f19-8f8a-de795215ffbb",
        "gender": "F",
        "age": 23,
        "longitude": "-0.17870253",
        "rate": 34.91,
        "latitude": "51.61986428"
    },
    {
        "uuid": "3da1c534-721f-41f2-9753-07af20e926b1",
        "gender": "M",
        "age": 58,
        "longitude": "-0.27018963",
        "rate": 26.57,
        "latitude": "51.22594297"
    },
    {
        "uuid": "f2dbd052-3c69-455e-8f06-796592606d53",
        "gender": "M",
        "age": 39,
        "longitude": "-0.12142801",
        "rate": 34.58,
        "latitude": "51.28734182"
    },
    {
        "uuid": "4a3938a6-e8e9-429a-9762-1a763f963349",
        "gender": "M",
        "age": 28,
        "longitude": "0.2840432",
        "rate": 36.98,
        "latitude": "51.6160722"
    }
];

  var response = [];
  _.each(artists, function(item) {
    response.push(new Artist(item));
  });
  // console.log('response', response);

  return {
    getAll: function() {
      return response;
    }
  };

}
