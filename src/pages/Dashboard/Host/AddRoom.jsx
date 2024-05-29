import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../Api/Utils";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
    const axiosSecure = useAxiosSecure()
  const { user,loading,setLoading } = useAuth();
 
  const [imagePreview ,setImagePreview] =useState()
  const [imageText ,setImageText] =useState('Upload image')
const navigate =useNavigate()

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  //   dates range
  const handleDates = (item) => {
    console.log(item);
    setDates(item.selection);
  };
  const {mutateAsync}=useMutation({
    mutationFn:async(roomData)=>{
        const {data} = await axiosSecure.post(`/room`,roomData)
        return data
    },
    onSuccess:()=>{
        // console.log('Data save successfully');
        toast.success('Data save successfully')
        navigate('/dashboard/my-listings')
        setLoading(false)

    }
  })
  //   Form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates.startDate;
    const from = dates.endDate;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    try {
      const image_url = await imageUpload(image);

      const roomData = {
        location,
        category,
        title,
        to,
        from,
        price,
        guests,
        bathrooms,
        bedrooms,
        host,
        description,
        image: image_url,
      };
    //   console.table(roomData);
await mutateAsync(roomData)
    } catch (err) {
      console.log(err);
      toast.error(err.message)
      setLoading(false)
    }
  };

  const handleImage =image =>{
    setImagePreview(URL.createObjectURL(image))
    setImageText(image.name)
  }
  return (
    <div>
       <Helmet>
        <title>Add Room | Dashboard</title>
       </Helmet>
      <AddRoomForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
        loading={loading}
      />
    </div>
  );
};

export default AddRoom;
