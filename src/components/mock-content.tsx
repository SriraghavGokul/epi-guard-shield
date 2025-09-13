export function MockContent() {
  return (
    <div className="h-full bg-white overflow-y-auto">
      {/* Mock Social Media Feed */}
      <div className="space-y-4 p-4">
        {/* Post 1 */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex items-center p-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div>
            <div>
              <div className="font-semibold text-sm">@nature_photos</div>
              <div className="text-gray-500 text-xs">2h ago</div>
            </div>
          </div>
          <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
          <div className="p-3">
            <p className="text-sm">Beautiful sunset over the mountains! 🌅</p>
          </div>
        </div>

        {/* Post 2 - This would trigger warnings */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden opacity-30 relative">
          <div className="absolute inset-0 bg-red-500/20 z-10 flex items-center justify-center">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              FILTERED: Flashing content detected
            </div>
          </div>
          <div className="flex items-center p-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full mr-3"></div>
            <div>
              <div className="font-semibold text-sm">@gaming_clips</div>
              <div className="text-gray-500 text-xs">4h ago</div>
            </div>
          </div>
          <div className="w-full h-48 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500"></div>
          <div className="p-3">
            <p className="text-sm">Epic gaming moment! ⚡</p>
          </div>
        </div>

        {/* Post 3 */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex items-center p-3">
            <div className="w-8 h-8 bg-green-500 rounded-full mr-3"></div>
            <div>
              <div className="font-semibold text-sm">@food_lover</div>
              <div className="text-gray-500 text-xs">6h ago</div>
            </div>
          </div>
          <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-red-400"></div>
          <div className="p-3">
            <p className="text-sm">Homemade pasta night! 🍝</p>
          </div>
        </div>

        {/* More posts continue... */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex items-center p-3">
            <div className="w-8 h-8 bg-indigo-500 rounded-full mr-3"></div>
            <div>
              <div className="font-semibold text-sm">@tech_news</div>
              <div className="text-gray-500 text-xs">8h ago</div>
            </div>
          </div>
          <div className="w-full h-32 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Article preview</span>
          </div>
          <div className="p-3">
            <p className="text-sm">Latest tech innovations...</p>
          </div>
        </div>
      </div>
    </div>
  );
}