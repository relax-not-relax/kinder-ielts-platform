/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Input,
  Option,
  Select,
  Spinner,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import UpdateMaterialLinkDialog from "./UpdateMaterialLinkDialog";
import studyMaterialAPI from "../../../../api/studyMaterialApi";
import { useSetAtom } from "jotai";
import { readRefreshScheduleAtom } from "../../../../store/mocks/scheduleAtom";

UpdateStudyMaterialDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  studyMaterials: PropTypes.object.isRequired,
};

function UpdateStudyMaterialDialog({ isOpen, onClose, studyMaterials }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmit, setIsSubmit] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [materialsList, setMaterialsList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedLink, setSelectedLink] = React.useState(null);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleOpenUpdate = (link) => {
    setSelectedLink(link);
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => setOpenUpdate(false);
  const refresh = useSetAtom(readRefreshScheduleAtom);

  React.useEffect(() => {
    setMaterialsList(studyMaterials.links);
  }, [studyMaterials]);

  const onSubmit = async (data) => {
    const req = {
      title: data.title,
      description: data.description,
    };
    setIsSubmit(true);
    try {
      await studyMaterialAPI.updateStudyMaterial(
        { id: studyMaterials.id },
        req
      );
      setIsSubmit(false);
      reset();
      onClose();
      refresh();
      enqueueSnackbar("Cập nhật study materials thành công!", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    } catch (error) {
      enqueueSnackbar("Cập nhật study materials không thành công!", {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      enqueueSnackbar("Vui lòng thử lại!", {
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setIsSubmit(false);
      onClose();
      reset();
    }
  };

  const fetchLinksList = async () => {
    setIsLoading(true);
    try {
      const res = await studyMaterialAPI.getStudyMaterials(studyMaterials.id);
      setMaterialsList(res.data.links);
      setIsLoading(false);
    } catch (error) {
      console.log("Failed to fetch materials list: ", error);
      setIsLoading(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      handler={onClose}
      dismiss={{ outsidePress: false }}
      size="xs"
      className="md:p-4 p-2"
    >
      <DialogHeader className="relative m-0 block">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold sm:text-xl text-lg">
            Cập nhật study materials
          </h3>
          <IconButton
            size="sm"
            variant="text"
            onClick={() => {
              onClose();
              reset();
            }}
            disabled={isSubmit}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </div>
        <p className="sm:text-base text-xs font-light">
          Đảm bảo các thông tin thật chính xác
        </p>
      </DialogHeader>
      <DialogBody>
        <div className="flex flex-col gap-y-6">
          <div className="w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div>
                <Input
                  label="Tiêu đề"
                  type="text"
                  size="lg"
                  {...register("title", {
                    required: "Vui lòng nhập tiêu đề",
                  })}
                  defaultValue={studyMaterials.title}
                  error={!!errors.title}
                />
                {errors.title && (
                  <Typography color="red" className="text-xs mt-1 italic">
                    {errors.title.message}
                  </Typography>
                )}
              </div>
              <div>
                <Textarea
                  color="gray"
                  label="Mô tả"
                  {...register("description", {
                    required: "Vui lòng nhập mô tả",
                  })}
                  defaultValue={studyMaterials.description}
                  error={!!errors.description}
                />
                {errors.description && (
                  <Typography color="red" className="text-xs mt-1 italic">
                    {errors.description.message}
                  </Typography>
                )}
              </div>

              <div className="mt-4">
                <p className="text-sm mb-2 font-bold">Danh sách tài liệu</p>
                {isLoading ? (
                  <div className="w-full h-24 flex justify-center items-center">
                    <Spinner />
                  </div>
                ) : (
                  <div className="flex flex-col">
                    {materialsList.map((material, key) => {
                      return (
                        <div
                          className="flex justify-between items-center"
                          key={key}
                        >
                          <a
                            className="text-sm font-semibold text-blue-gray-600 underline"
                            href={material.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={key}
                          >
                            {material.title}
                          </a>
                          <IconButton
                            variant="text"
                            onClick={() => {
                              handleOpenUpdate(material);
                            }}
                          >
                            <PencilSquareIcon className="h-4 w-4" />
                          </IconButton>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="w-full flex justify-end items-center">
                <Button
                  className="rounded-full bg-yellow py-1 hover:bg-custom-red text-black hover:text-white"
                  type="submit"
                  loading={isSubmit}
                >
                  <span className="normal-case xl:text-lg sm:text-base text-sm">
                    Save changes
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogBody>

      {selectedLink && (
        <UpdateMaterialLinkDialog
          isOpen={openUpdate}
          onClose={handleCloseUpdate}
          materialLink={selectedLink}
          refresh={fetchLinksList}
        />
      )}
    </Dialog>
  );
}

export default UpdateStudyMaterialDialog;
