import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import data from "../data";
import Loader from "../components/Loader";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Home = () => {
  const initialImages = data.data;
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTag, setSearchTag] = useState(null); //Collects the input query
  const [searchedImage, setSearchedImage] = useState(null); //Stores the filtered data from the images state

  // Simulate loading images with a delay
  useEffect(() => {
    setTimeout(() => {
      setImages(initialImages);
      setLoading(false); // Set loading to false when images are loaded
    }, 2000); // Simulate a 2-second delay
  }, [initialImages]);

  const handleSearch = () => {
    const filteredImages = images.filter((image) => {
      return image.tag.toLowerCase().includes(searchTag.toLowerCase());
    });
    setSearchedImage(filteredImages);
  };

  const SortableUser = (user) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: user.user.id });
    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };
    return (
      <div
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="relative p-2 rounded-sm shadow-lg hover:scale-105 hover:shadow-slate-400 duration-75 ease-in-out"
      >
        <img src={user.user.src} alt="card-diagram" className="w-full" />
        <p className="absolute top-4 right-4 px-2 py-1 rounded-md text-white bg-slate-400">
          {user.user.tag}
        </p>
      </div>
    );
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!active || !over || active.id === over.id) {
      return;
    }

    // Update both images and searchedImage
    const updatedImages = arrayMove(
      images,
      images.findIndex((image) => image.id === active.id),
      images.findIndex((image) => image.id === over.id)
    );

    setImages(updatedImages);

    // If searchedImage is not null, update it as well
    if (searchedImage !== null) {
      const updatedSearchedImage = arrayMove(
        searchedImage,
        searchedImage.findIndex((image) => image.id === active.id),
        searchedImage.findIndex((image) => image.id === over.id)
      );
      setSearchedImage(updatedSearchedImage);
    }
  };

  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Header handleLogOut={handleLogOut} user={user} />
      <div className="my-6">
        <h1 className="text-2xl text-center">My Image Gallery</h1>
        <div className="flex justify-center my-10">
          <div className=" flex border-sm border-blue-400 border-2 px-3 py-1 w-60 sm:w-96">
            <input
              type="text"
              name="search"
              placeholder="Enter you search word"
              id="search"
              className="w-full outline-none"
              onChange={(e) => setSearchTag(e.target.value)}
            />
            <span className="cursor-pointer" onClick={handleSearch}>
              Search
            </span>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="text grid grid-cols-1 px-[5%] sm:grid-cols-2 md:grid-cols-3 gap-10 p-5">
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={onDragEnd}
            >
              <SortableContext
                items={images}
                strategy={verticalListSortingStrategy}
              >
                {searchedImage && searchedImage.length === 0 ? (
                  <div className="text-center text-gray-500 col-span-3">
                    Oops no matching tags found!
                  </div>
                ) : (
                  (searchedImage ? searchedImage : images).map((image) => (
                    <SortableUser key={image.id} user={image} />
                  ))
                )}
              </SortableContext>
            </DndContext>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
