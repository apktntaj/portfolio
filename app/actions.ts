"use server";

export async function formAction(formData: FormData) {
  const rawFormData = {
    tidur: formData.get("tidur"),
    bangunTidur: formData.get("bangunTidur"),
    buatSusu: formData.get("buatSusu"),
    sisaSusu: formData.get("sisaSusu"),
    pup: formData.get("pup"),
    gantiPampers: formData.get("gantiPampers"),
  };

  console.log(rawFormData);
}
