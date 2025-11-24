"use client";

import { useState, useMemo } from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
    getSortedRowModel,
    SortingState,
} from "@tanstack/react-table";
import { mockRestaurants } from "@/data/mock";
import { Restaurant } from "@/types";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Edit, Trash2, Plus, X, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

// Zod Schema for validation
const restaurantSchema = z.object({
    name: z.string().min(2, "Name is required"),
    cuisine: z.string().min(2, "Cuisine is required"),
    address: z.string().min(5, "Address is required"),
    price_range: z.enum(["$", "$$", "$$$", "$$$$"]),
});

type RestaurantFormValues = z.infer<typeof restaurantSchema>;

export default function AdminPage() {
    const [data, setData] = useState<Restaurant[]>(mockRestaurants);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<RestaurantFormValues>({
        resolver: zodResolver(restaurantSchema),
    });

    const columnHelper = createColumnHelper<Restaurant>();

    const columns = useMemo(
        () => [
            columnHelper.accessor("name", {
                header: "Name",
                cell: (info) => <span className="font-medium">{info.getValue()}</span>,
            }),
            columnHelper.accessor("cuisine", {
                header: "Cuisine",
                cell: (info) => <Badge variant="secondary">{info.getValue()}</Badge>,
            }),
            columnHelper.accessor("rating", {
                header: "Rating",
                cell: (info) => (
                    <div className="flex items-center gap-1">
                        <span className="font-bold">{info.getValue()}</span>
                        <span className="text-yellow-500">★</span>
                    </div>
                ),
            }),
            columnHelper.accessor("price_range", {
                header: "Price",
            }),
            columnHelper.display({
                id: "actions",
                header: "Actions",
                cell: (info) => (
                    <div className="flex gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(info.row.original)}
                        >
                            <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => handleDelete(info.row.original.id)}
                        >
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>
                ),
            }),
        ],
        []
    );

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const handleEdit = (restaurant: Restaurant) => {
        setEditingId(restaurant.id);
        setValue("name", restaurant.name);
        setValue("cuisine", restaurant.cuisine);
        setValue("address", restaurant.address);
        setValue("price_range", restaurant.price_range);
        setIsModalOpen(true);
    };

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this restaurant?")) {
            setData(data.filter((r: Restaurant) => r.id !== id));
            toast.success("Restaurant deleted successfully");
        }
    };

    const onSubmit = (values: RestaurantFormValues) => {
        if (editingId) {
            setData(
                data.map((r: Restaurant) =>
                    r.id === editingId ? { ...r, ...values } : r
                )
            );
            toast.success("Restaurant updated successfully");
        } else {
            const newRestaurant: Restaurant = {
                id: Math.random().toString(36).substr(2, 9),
                ...values,
                rating: 0,
                geo_coords: { lat: 0, lng: 0 },
                images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"],
                minimal_description: "New restaurant description...",
                reviews: [],
            };
            setData([...data, newRestaurant]);
            toast.success("Restaurant added successfully");
        }
        setIsModalOpen(false);
        reset();
        setEditingId(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--color-foreground)]">Admin Dashboard</h1>
                    <p className="text-gray-500">Manage your restaurant listings</p>
                </div>
                <Button onClick={() => {
                    setEditingId(null);
                    reset();
                    setIsModalOpen(true);
                }}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Restaurant
                </Button>
            </div>

            <Card className="overflow-hidden border-0 shadow-lg">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-700 uppercase font-medium">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} className="px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors" onClick={header.column.getToggleSortingHandler()}>
                                            <div className="flex items-center gap-2">
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {{
                                                    asc: " 🔼",
                                                    desc: " 🔽",
                                                }[header.column.getIsSorted() as string] ?? null}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id} className="bg-white hover:bg-gray-50 transition-colors">
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="px-6 py-4">
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <Card className="w-full max-w-md animate-in fade-in zoom-in duration-200">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>{editingId ? "Edit Restaurant" : "Add Restaurant"}</CardTitle>
                            <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)}>
                                <X className="w-4 h-4" />
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <Input {...register("name")} placeholder="Restaurant Name" />
                                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Cuisine</label>
                                    <Input {...register("cuisine")} placeholder="e.g. Italian, Indian" />
                                    {errors.cuisine && <p className="text-red-500 text-xs">{errors.cuisine.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Address</label>
                                    <Input {...register("address")} placeholder="Full Address" />
                                    {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Price Range</label>
                                    <select
                                        {...register("price_range")}
                                        className="w-full h-11 rounded-2xl border border-gray-200 bg-white/50 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    >
                                        <option value="$">$ (Budget)</option>
                                        <option value="$$">$$ (Moderate)</option>
                                        <option value="$$$">$$$ (Expensive)</option>
                                        <option value="$$$$">$$$$ (Luxury)</option>
                                    </select>
                                </div>

                                <div className="pt-4 flex gap-3">
                                    <Button type="button" variant="outline" className="w-full" onClick={() => setIsModalOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button type="submit" className="w-full">
                                        {editingId ? "Update" : "Create"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
