import React, { useState } from 'react';
import useHeroMutations from '../hooks/useHeroMutations';
import { uploadImageToS3 } from '../services/uploadImage';
import type { CreateHero, Hero, UpdateHero } from '../types/hero.t';
import { useNavigate } from 'react-router';
import { deleteImageFromS3 } from '../services/deleteImage';

interface HeroFormProps {
  hero?: Hero;
}

export default function HeroForm({ hero }: HeroFormProps) {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState(hero?.nickname || '');
  const [realName, setRealName] = useState(hero?.real_name || '');
  const [originDescription, setOriginDescription] = useState(
    hero?.origin_description || ''
  );
  const [superpowers, setSuperpowers] = useState(
    hero ? hero.superpowers.join(',') : ''
  );
  const [catchPhrase, setCatchPhrase] = useState(hero?.catch_phrase || '');
  const [existingImages, setExistingImages] = useState<string[]>(
    hero?.images || []
  );
  const [newImages, setNewImages] = useState<File[]>([]);
  const [removedImages, setRemovedImages] = useState<string[]>([]);

  const { createHero, updateHero, deleteHero } = useHeroMutations();

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const filesArr = Array.from(e.target.files);
    setNewImages((prev) => [...prev, ...filesArr]);
  };

  const removeExistingImage = (index: number) => {
    const img = existingImages[index];
    setRemovedImages((prev) => [...prev, img]);
    setExistingImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeNewImage = (index: number) => {
    setNewImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const uploadedUrls: string[] = [];
    for (const file of newImages) {
      const url = await uploadImageToS3(file);
      uploadedUrls.push(url);
    }

    for (const img of removedImages) {
      const fileName = img.split('/').pop();
      if (fileName) {
        await deleteImageFromS3(fileName);
      }
    }

    if (hero) {
      const heroData: UpdateHero = {
        id: hero.id,
        nickname,
        real_name: realName,
        origin_description: originDescription,
        superpowers: superpowers
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        catch_phrase: catchPhrase,
        images: [...existingImages, ...uploadedUrls],
      };

      updateHero.mutate(heroData, {
        onSuccess: () => {
          alert('Hero updated!');
          window.location.reload();
        },
      });
    } else {
      const heroData: CreateHero = {
        nickname,
        real_name: realName,
        origin_description: originDescription,
        superpowers: superpowers
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        catch_phrase: catchPhrase,
        images: [...existingImages, ...uploadedUrls],
      };
      createHero.mutate(heroData, {
        onSuccess: () => {
          alert('Hero created!');
          navigate('/');
        },
      });
    }
  };

  const handleDelete = () => {
    if (!hero) return;
    deleteHero.mutate(String(hero.id), {
      onSuccess: () => {
        navigate('/');
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-800/90 p-6 rounded-xl shadow-lg text-white flex flex-col gap-4"
    >
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Nickname"
        className="p-2 rounded bg-neutral-700"
        required
      />

      <input
        type="text"
        value={realName}
        onChange={(e) => setRealName(e.target.value)}
        placeholder="Real name"
        className="p-2 rounded bg-neutral-700"
        required
      />

      <textarea
        value={originDescription}
        onChange={(e) => setOriginDescription(e.target.value)}
        placeholder="Origin description"
        className="p-2 rounded bg-neutral-700"
        rows={4}
      />

      <textarea
        value={superpowers}
        onChange={(e) => setSuperpowers(e.target.value)}
        placeholder="Superpowers (e.g. 'super strength, night vision, ...')"
        className="p-2 rounded bg-neutral-700"
        rows={4}
      />

      <input
        type="text"
        value={catchPhrase}
        onChange={(e) => setCatchPhrase(e.target.value)}
        placeholder="Catch phrase"
        className="p-2 rounded bg-neutral-700"
      />

      <div>
        <label className="block mb-2">Images</label>
        <input
          type="file"
          multiple
          onChange={handleImageSelect}
          className="bg-neutral-700 rounded p-2 cursor-pointer"
        />

        <div className="flex gap-2 mt-2 flex-wrap">
          {existingImages.map((img, i) => (
            <div key={i} className="relative">
              <img src={img} alt="hero" className="w-24 h-24 object-cover" />
              {hero && (
                <button
                  type="button"
                  onClick={() => {
                    removeExistingImage(i);
                  }}
                  className="absolute top-1 right-1 bg-red-600 text-white px-2 py-1 text-xs rounded"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-2 flex-wrap">
          {newImages.map((file, i) => {
            const preview = URL.createObjectURL(file);
            return (
              <div key={i} className="relative">
                <img
                  src={preview}
                  alt="preview"
                  className="w-24 h-24 object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeNewImage(i)}
                  className="absolute top-1 right-1 bg-red-600 text-white px-2 py-1 text-xs rounded"
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="submit"
          className={`px-4 py-2 rounded cursor-pointer ${
            hero
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {hero ? 'Save' : 'Create Hero'}
        </button>

        {hero && (
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}

