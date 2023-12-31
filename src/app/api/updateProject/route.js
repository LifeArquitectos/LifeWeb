import { connectDB } from '@/libs/mongodb';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import Project from '@/models/project';
import mongoose from 'mongoose';

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: 'You must be logged in.' },
      { status: 402 }
    );
  }
  try {
    await connectDB();

    const data = await request.json();
    const project = {
      titulo: data.titulo,
      cliente: data.cliente,
      colaborador1: data.colaborador1,
      colaborador2: data.colaborador2,
      colaborador3: data.colaborador3,
      tipologia: data.tipologia,
      metraje: data.metraje,
      ubicacion: data.ubicacion,
      resumen: data.resumen,
      año: data.año,
      portada: data.portada,
      galeria: data.galeria,
    };

    const updateProject = await Project.findOneAndUpdate(
      { titulo: data.titulo },
      { $set: project },
      { new: true }
    );
    return NextResponse.json(updateProject, { status: 201 });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.error();
  }
}
